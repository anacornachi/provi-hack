import {
  Button,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
  InputRightElement,
} from '@chakra-ui/react';
import {ReactNode, useState} from 'react';
import {useFormContext} from 'react-hook-form';
import {IoEyeOffOutline, IoEyeOutline} from 'react-icons/io5';
import InputMask from 'react-input-mask';

type Props = {
  name: string;
  title?: string;
  bgColor?: string;
  leftIcon?: ReactNode;
  disabled?: boolean;
  mask?: string;
} & InputProps;

export default function CustomInput({
  name,
  bgColor,
  title,
  leftIcon,
  disabled,
  mask,
  w,
  ...props
}: Props) {
  const [showPassword, setShowPassword] = useState(false);

  const {formState, register} = useFormContext();

  const {errors} = formState;
  const error = errors[name];

  return (
    <FormControl w={w} isInvalid={Boolean(error)} mb={error ? '10px' : 0}>
      <Heading
        as="h3"
        fontSize="18px"
        fontWeight="semibold"
        mb={{base: '6px', md: '10px'}}
        ml="10px"
        color="description"
      >
        {title}
      </Heading>
      <InputGroup>
        {leftIcon && <InputLeftElement children={leftIcon} />}
        <Input
          {...props}
          type={
            props.type === 'password'
              ? showPassword
                ? 'text'
                : 'password'
              : props.type ?? undefined
          }
          color="description"
          as={mask ? InputMask : 'input'}
          {...(mask ? {mask: mask, maskChar: null} : {})}
          readOnly={disabled}
          px="10px"
          fontSize={{base: '14px', md: '16px'}}
          pr={props.type === 'password' ? '15%' : '16px'}
          _focus={{boxShadow: 'none', border: '1px solid #53882A'}}
          _hover={{boxShadow: 'none', border: '1px solid #53882A'}}
          bg={disabled ? 'disabled' : bgColor}
          border="1px solid #53882A"
          borderColor="#53882A"
          borderRadius="6px"
          {...register(name)}
        />

        {props.type === 'password' && (
          <InputRightElement>
            <Button
              h="30px"
              w="100%"
              size="lg"
              bg="none"
              tabIndex={-1}
              p="0"
              _focus={{boxShadow: 'none', bg: 'none'}}
              _hover={{bg: 'none'}}
              _active={{bg: 'none'}}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
            </Button>
          </InputRightElement>
        )}
      </InputGroup>
      <FormErrorMessage
        fontSize={{base: 'xs', lg: 'sm'}}
        mt="4px"
        color="primaryBlue"
        position="absolute"
        id={`error-message-${name}`}
      >
        {String(error?.message)}
      </FormErrorMessage>
    </FormControl>
  );
}
