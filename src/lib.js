function aXDecimales (numeroInicial, numeroDecimales){
    return (Math.round (numeroInicial*(10**numeroDecimales))/10**numeroDecimales)
}

export {aXDecimales}