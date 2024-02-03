[[Sistemas electrónicos y digitales]] #Verilog #Quartus

# Sobre los archivos:

|Filename|Corresponde a:|
|---|---|
|BB_SYSTEM|Declaración de unión entre los componentes de la blackbox.|
|rtl/CC_<->.v|Programación / Declaración de la funcionalidad cómo expresión, Ifs, es un módulo adjunto. |

# Ver diagrama de caja negra/ caja blanca:

> Tools → Netlist tools → RTL Viewer
![[Quartus1.png]]

> → (Botón con ícono) “+” para caja blanca
![[Quartus2.png]]

# Declaración de una compuerta AND cómo código:
```verilog
if ((CC_GateAND_a_In == 1'b1) && (CC_GateAND_b_In == 1'b1)) 
		CC_GateAND_z_Out = 1'b1;
	else
		CC_GateAND_z_Out = 1'b0;
```

```verilog
1'b1 // ->  Valor "(1)" de 1-bit. 
2'b1 // ->  Valor "(01)" de 2-bit...
&& //-> Operador AND
```

**Pseudo-Description:**
Sí la entrada “a” **Y** la entrada “b” **AMBAS** son iguales a 1: Dar valor de salida (1) de 1-bit.
De cualquier otra manera: Dar valor de salida (0) de 1-bit.


## Antes e correr la simulación:
Ir al archivo `TB_SYSTEM.tb` y modificar los casos de prueba a tiempos y variables que hagan sentido para el propósito a modificarse.

Ir al archivo `TB_SYSTEM.do` y **cambiar los nombres de las señales a nombres descriptivos**. Las señales se agregan con la palabra `wave` y se establece la dirección de e módulo del cual vienen. Por ejemplo, para ver la salida de el `CC_AND.v` (Compuerta and):
```Verilog
add wave CC_AND/CC_GateAND_z_Out
add wave Componente/signal_salida
```

## Para correr la simulación (Diagrama de tiempos):
Quartus tiende a molestar más que un poco con esto, así que hay un procedimiento bastante religioso:

> Tools → Run Simulation Tools → RTL simulation
> STOP (Boton de STOP)
> Consola (parte de abajo) → do TB_SYSTEM.do
```verilog
do TB_SYSTEM.do
```
> STOP (Boton de STOP)
> Caja de díalogo con checkbox $\rightarrow$ OK

La simulación empezará a correr, en la parte de abajo se verá cuantos ms han transcurrido. Puede ser demorada.

# Sacar capturas para entregar en el informe:
Captura a la simulación → Título: “Caso #” (Correspondiente al vector de prueba de TB)

Ver ("caber/fit to screen") todo el diagrama de tiempos: F (Tecla)
Hacer zoom en el diagrama de tiempos: (Ctrl + Mouse_Wheel_Scroll) 