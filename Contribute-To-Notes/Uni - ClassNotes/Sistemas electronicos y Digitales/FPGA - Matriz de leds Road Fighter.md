[[Sistemas electrónicos y digitales]] #Proyecto

- Se usa la "FPGA" entrenadora con una matriz de leds.
- La matriz de LEDs se divide por la mitad, un jugador juega un lado, otro juega el otro lado, estos son independientes.

Ya implementado:
- Control de la matriz de leds.
- Control de los pulsadores (debounce).

Tips:
- Pensar en la Matriz de leds, no cómo una matriz, sino cómo dos  "registos" de 8 bits (8*8).

Entradas:
- Load. - Cargar el *carrito inicial*. 
- Reset. - Apaga todos los leds de la matriz (vuelve al estado inicial.)

## Los carros que "cáen:"
Se puede tomar cómo un set de registros. Puede ser un registro general (reg_random es opcional).

¿Cómo hacer que los carros "caigan"?
La matriz se compone de 8 registros con 8 bits cada uno. 
**T.Q**
$[R1] = [b,xxxxxxxx]$
$[R2] = [b,xxxxxxxx]$
$[R3] = [b,xxxxxxxx]$
$[R4] = [b,xxxxxxxx]$
$[R5] = [b,xxxxxxxx]$
$[R6] = [b,xxxxxxxx]$
$[R7] = [b,xxxxxxxx]$
$[R8] = [b,xxxxxxxx]$

Así que si le doy el **load** a todos al mismo tiempo

$[R1] = [b,xxxxxxxx]$ 
$\Downarrow$ 
$[R2] = [b,xxxxxxxx]$
$\Downarrow$ 
$[R3] = [b,xxxxxxxx]$
$\Downarrow$ 
$[R4] = [b,xxxxxxxx]$
$\Downarrow$ 
$[R5] = [b,xxxxxxxx]$
$\Downarrow$ 
$[R6] = [b,xxxxxxxx]$
$\Downarrow$ 
$[R7] = [b,xxxxxxxx]$
$\Downarrow$ 
$[R8] = [b,xxxxxxxx]$

