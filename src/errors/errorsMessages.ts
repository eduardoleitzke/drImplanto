export function errorMessageTypes(errorType:string){
    if(errorType === 'cpfError'){
        const errorMessage = 'JÁ EXISTE UM CADASTRO COM ESSE CPF'
        return errorMessage
    }

    if(errorType === 'emailError'){
        const errorMessage = 'JÁ EXISTE UM CADASTRO COM ESSE E-MAIL'
        return errorMessage
    }

    if(errorType === 'loginServerError'){
        const errorMessage = 'E-MAIL / SENHA INCORRETO'
        return errorMessage
    }

    if(errorType = 'loginInputInvalid'){
        const errorMessage = 'CAMPOS INVÁLIDO'
        return errorMessage
    }
    return ''
}