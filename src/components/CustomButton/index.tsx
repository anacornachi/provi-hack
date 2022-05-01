import { Button } from "@chakra-ui/react"

function CustomButton({onClick, children}: any) {
    return (
        <Button
        bgColor={'background'}
        color={'description'}
        border={'solid 1px'}
        borderColor={'description'}
        borderRadius={'6px'}
        minH={'54px'}
        minW={'200px'}
        display={'flex'}
        justifyContent={'flex-start'}
        onClick={onClick}
        >
            {children}
        </Button>
    );
}

export default CustomButton;