[[Fundamentos en Redes/Fundamentos en Redes]]
$$ \% \frac{Headers}{Application} = \frac{\sum headers}{TCP_{Payload}}*(100)$$
$$\sum headers = Ethernet+IP+TCP$$
El header de Ethernet siempre es de 14 Bytes 8(2MAC, 1IPType) 
$$Ethernet_{header} = 14 Bytes $$
El header de IP es de 20 Bytes (sin opciones, cómo el caso de la captura)
$$IP_{header} = 20 Bytes $$
El header de TCP es variable, contando 28 pares Hexadecimales en WireShark podemos calcular
$$TCP_{header} = 28hex * \frac{8Bytes}{1hex} = 224 Bytes$$
Entonces la suma de headers resulta
$$\sum headers = 14 Bytes + 20 Bytes + 224Bytes$$
$$\sum headers = 258 Bytes$$
Al ser una captura de un HTTP GET el payload de capa de aplicación es un su totalidad el payload de TCP:
$$TCP_{Payload} = 431 Bytes$$

Por tanto la razón entre encabezados y capa de aplicación es de:
$$ \% \frac{Headers}{Application} = \frac{258Bytes}{431Bytes}*(100) \approx 60\% $$
Lo cúal implica que en un GET de HTTP el mensaje sólo tendrá razón de $$\frac{6}{10}$$
 del mensaje, dónde $$\frac{4}{10}$$ del mensaje apróximadamente serán encabezados de las otras capas.