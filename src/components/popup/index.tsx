import Button from "@/components/button";
import Input from "@/components/input";
import { colors } from "@/styles/theme";
import { useState } from "react";
import { View, Text, Modal, Pressable, Alert } from "react-native";
import { KeyRound, Lock, Mail } from 'lucide-react-native';
import { BlurView } from 'expo-blur';
import { s } from "./style";
import { useRouter } from "expo-router";
import { authService } from "@/services/authService";


interface ModalProps {
  visible: boolean;
  onClose: () => void;
}

type ModalStep = 'send-email' | 'select-method';

export default function ForgotPasswordPopup({visible, onClose}: ModalProps) {
    const [recoveryId, setRecoveryId] = useState<string | null>(null);
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [currentStep, setCurrentStep] = useState<ModalStep>('send-email');
    const [loading, setLoading] = useState(false);

   const handleSubmitEmail = async () => {
        if (!email) {
            Alert.alert("Erro", "Por favor, digite seu e-mail.");
            return;
        }

        setLoading(true);
        try {
            const response = await authService.requestPasswordReset(email);
            setRecoveryId(response.recoveryId);
            setCurrentStep('select-method');
        } catch (error: any) {
            console.error('Erro ao enviar e-mail:', error);
            Alert.alert("Erro", error.message || "Não foi possível enviar o e-mail. Por favor, verifique-o e tente novamente.");
        } finally {
            setLoading(false);
        }
    };

    const handleClose = () => {
        setEmail('');
        setCurrentStep('send-email');
        onClose();
    };

    const handleMethodSelected = (method: 'code' | 'answer') => {
        if (!recoveryId) {
            Alert.alert("Erro", "Ocorreu um erro. Por favor, tente novamente.");
            return;
        }

    handleClose();

    if (method === 'code') {
            router.push({
                pathname: '/(auth)/verify-code',
                params: { recoveryId: recoveryId, email: email },
            });
        } else if (method === 'answer') {
            router.push({
                pathname: '/(auth)/verify-answer',
                params: { recoveryId: recoveryId, email: email },
            });
        }
    };

    const renderEmailStep = () => {
      return(
        <>
        <View style={s.iconRound}>
            <KeyRound size={40} color={colors.green.base}/>
        </View>
        <View style={s.titleContainer}>
            <Text style={s.title}>Esqueceu a senha?</Text>
            <Text style={s.subtitle}>
                Digite o email associado à sua conta {'\n'}para recuperar sua senha.
            </Text>
        </View>
        <View style={s.actionContainer}>
          <Input
          label='Email'
          placeholder='seu.email@exemplo.com'
          value={email}
          onChangeText={setEmail}
          type='email'
          />
          <Button
          title="Continuar"
          onPress={handleSubmitEmail}
          />
        </View>
        </>
      )
    }

    const renderSelectMethodStep = () =>{
      return(
        <>
        <Text style={s.title}>Como você gostaria de recuperar sua senha?</Text>

        <View style={s.methodsContainer}>
            <Pressable 
            style={({pressed}) => [s.methodOption, pressed && s.methodPressed]}
            onPress={() => handleMethodSelected('code')}
            >
                {({ pressed }) => (
                    <>
                    <Mail size={48} color={pressed ?  '#ffffff': '#000000'}/>
                    <Text style={[
                        s.methodTitle,
                        pressed && s.methodTitlePress
                    ]}>Receber código {'\n'}por email</Text>
                    </>
                )}
            </Pressable>
            <Pressable 
            style={({pressed}) => [s.methodOption, pressed && s.methodPressed]}
            onPress={() => handleMethodSelected('answer')}
            >
                {({ pressed }) => (
                    <>
                    <Lock size={48} color={pressed ?  '#ffffff': '#000000'}/>
                    <Text style={[
                        s.methodTitle,
                        pressed && s.methodTitlePress
                    ]}>Responder à {'\n'}pergunta secreta</Text>
                    </>
                )}
            </Pressable>
        </View>
        </>
      )
    }

    return (
      <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      statusBarTranslucent={true}
      onRequestClose={handleClose}
      >
        <BlurView intensity={20} tint="dark" style={s.container}>
          <Pressable style={s.backdrop} onPress={handleClose}/>
          <View style={s.popup}>
            {currentStep == 'send-email' ? renderEmailStep() : renderSelectMethodStep()}
          </View>
        </BlurView>
      </Modal>
    );
}
