[[Fundamentos en Redes/Fundamentos en Redes]]
#Calculos
- Las muestras y los valores actualizados de RTT **solo** tienen en cuenta los paquetes que se han transmitido una sola vez (los paquetes retransmitidos no actualizan el RTT). 
- El promedio de las muestras (sample RTT) se guarda en una variable Estimated RTT
## Fórmulas para cálculo variación:

$$ EstimatedRTT = ErTT_{0|n-1}(1-\alpha) + \alpha(sampleRTT) $$

$$ sampleRTT = \triangle_{TiempoPaquetes} = |TPaquete_{n} - TPaquete_{n-1}| $$

$$ DevRTT = (1-\beta)*DevRTT_{0|n-1} + \beta|SampleRTT - ErTT_{0|n-1}| $$

$$ TimeOutInterval = ErTT_{0|n-1} + (4*DevRTT) $$

0|n-1" **Nótese que ErTT₀ y DevRTT₀ son valores dados por el problema que se usan **********************************************sólamente para el primer cálculo de cada item.********************************************** Despúes del primero ErTT₀ y DevRTT₀ son calculados en base al resultado anterior (recursividad).**

## Resolución de ejercicio en Excel:
![[Redes RTT y DevRTT.xlsx]]
![[Excel 2.png]]

![[Excel 1.png]]