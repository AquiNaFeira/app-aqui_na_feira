import { useState } from "react";
import { View, Text, TextInput, Pressable, TextInputProps } from "react-native";
import { Eye, EyeOff } from 'lucide-react-native';
import { s } from './style'
import { colors } from "@/styles/colors";

interface InputProps extends TextInputProps {
    label?: string;
    placeholder?: string;
    value?: string;
    onChangeText: (text: string) => void;
    type: 'text' | 'email' | 'password';
    error?: string;
    containerStyle?: object;
    inputStyle?: object;
    labelStyle?: object;
    required?: boolean;
    disabled?: boolean;
}

export default function Input({label, 
    placeholder, 
    value, 
    onChangeText, 
    type = 'text', 
    error, 
    containerStyle,
    inputStyle,
    labelStyle,
    required = false,
    disabled = false,
    ...rest
}: InputProps){
    const [showPassword, setShowPassword] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const isPasswordType = type === 'password';

    const getKeyboardType = () => {
        switch (type) {
            case 'email':
                return 'email-address'
            default:
                return 'default'
        }
    }

    const getAutoCapitalize = () => {
        switch (type) {
            case 'email':
                return 'none'
            default:
                return 'sentences'
        }
    }
    return(
        <View style={[s.container, containerStyle]}>
            {
                label && (
                    <Text style={[s.label, labelStyle]}>
                        {label}
                        {required && <Text style={s.required}>*</Text>}
                    </Text>
                )
            }

            <View style={[
                s.inputContainer,
                isPasswordType && s.passwordContainer,
                isFocused && s.inputFocused,
                error && s.errorText,
                disabled && s.inputDisabled
            ]}>
                <TextInput
                style={[
                    s.input,
                    isPasswordType && s.inputPassword,
                    inputStyle
                ]}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={isPasswordType && !showPassword}
                keyboardType={getKeyboardType()}
                autoCapitalize={getAutoCapitalize()}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                editable={!disabled}
                {...rest}
                />

                {
                    isPasswordType && (
                        <Pressable
                        onPress={() => setShowPassword(!showPassword)}
                        style={s.eyeIcon}
                        disabled={disabled}
                        >
                            {
                                showPassword ?
                                <Eye size={20} color={disabled ? colors.green.light : colors.green.light} /> : 
                                <EyeOff size={20} color={disabled ? colors.green.light : colors.green.light} />
                            }
                        </Pressable>
                    )
                }
            </View>

                {
                    error && (
                        <Text style={s.errorText} >{error}</Text>
                    )
                }

        </View>
    )
}