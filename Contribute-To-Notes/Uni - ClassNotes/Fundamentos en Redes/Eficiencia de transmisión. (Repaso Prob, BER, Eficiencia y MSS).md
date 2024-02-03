[[Fundamentos en Redes/Fundamentos en Redes]]
## Repaso de probabilidad

Dado:

|       | X=1 | X=2 | x=3 | x=4 |
| ----- | --- | --- | --- | --- |
| Y = 1 | 10  | 10  | 20  | 10  |
| Y = 2 | 20  | 20  | 40  | 20  |

Repaso de probabilidad:
$$P(X=1, Y=1) = \frac{10}{50}$$
Regla de la multiplicación:

Sobre el total, cúantas prosibilidades hay de que $(X=1|Y=1)$ 
$$P(X=1|Y=1)*P(Y=1) = \frac{10}{100} = \frac{50}{150} = \frac{1}{3}$$
Visualmente es la coordenada de la casilla/total.
______________
Entonces, para las condicionales:
$$P(X=1  | Y=1) = \frac{10}{50} = \frac{1}{5}$$
"Cantidad de posibilidades de $(Y = 1)$ cómo total, ¿Cúantas de esas $X=1$ ? "

Para $(X = 2)$ son las posibilidades totales de  $(X = 2) / Total$: 
(Visualmente es la columna $(X=2)$ entre $\sum_{Tot}$ )
$$P(X=2) = \frac{30}{150} = \frac{1}{5}$$
Entonces:
"¿Dado que $(Y=1)$, qué tan probable es que $(X=2)?$"
$$P(X=2  | Y = 1) = \frac{10}{50} = \frac{1}{5} $$
Qué tan probable es que $(X=2)$ en la fila total de posibilidades $(Y=1)$

Lo cúal es igual que decir:
$$P(X=2  | Y = 1) = P(X =2) * P(Y=1) = (\frac{10}{50})*(\frac{50}{50}) = (\frac{1}{5})*(\frac{1}{1}) = \frac{1}{5}$$
"Las probabilidades que *Y esté en fila de Y*  (Probabilidad del 100%) **Y** que en ese total X tome un valor $(X=1)$ " Lo cúal es la multiplicación de los dos.

_______________
## Bit Rate Error (BER):

Fórmula: $\frac{Perdidos/Malos}{Total}$ para Bits enviados.

Entonces, si BER es para un bit. 
¿Cúal es la probabilidad de tener un paquete malo/ con error?
$$P(Pckt_{Error}) = 1 - (1 - BER)^{longitud} = P_{Pckt}$$
- L = Longitud del paquete (en bits)
Un paquete se considera malo si un bit es erroneo.

## Eficiencia (Razonamiento):
$$Eficiency = \frac{Real_{Bit/seg}}{Ideal_{Bit/seg}} = \frac{Troughput}{R}$$
- $Real_{Bit/seg} | Ideal_{Bit/seg} =$ Tiempo en trasmitir L bits.

**Hasta $k$ Transmisiones:** 
Dónde:
- $$ P_{Pckt} = 1 - (1 - BER)^{longitud} = P_{Pckt} $$
Entonces:
"P(Hasta K transmisiones)..."
- $$P\rightarrow k : (1 - P_{Pckt})*(P_{Pckt})^k-1$$
_____________
## Eficiencia (Ecuación):

Teórico:
$$E_{ff} = \frac{L}{R} * [\frac{1}{\frac{L+h}{k}+ 2t_{p}+\frac{h}{R}}]*\frac{(1-P)}{1} = \frac{L(1-BER)^{L+2h}}{L+H+2Rt_{p}+h}$$
Vista cómo función de sus variables:
$$E_{ff}(L,BER,h,R,t_{p})$$
Sin embargo:
- BER es constante (Conocida).
- h es constante (Tamaño de los Headers)
- R es Tiempo **ideal** *(Ancho de banda)* en transmitir L bits (Constante, conocido).
- $t_{p}$ es Tiempo de propagación (Constante, conocido)

T.Q se puede decír, prácticamente:
$$E_{ff}(L) ; \{ BER,h,R,t_{p}\} \in \Re$$
Por lo tanto la optimización de la eficiencia está en **optimizar la longitud del paquete**
### **MSS: Maximum Segment Size (Longitud del paquete)**
> "Hay un MSS óptimo para mejorar la eficiencia para cada protocolo."

