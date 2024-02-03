[[Sistemas electrónicos y digitales]] #Verilog
# Preparación, declaración de señales e instanciación

Sumador de 1-bit (Carry entrada, Num entrada, Carry Salida, Resultado Salida)

```verilog
module //-> Definición de un módulo T.Q
module BB_SYSTEM(
// Definición de señales
// Declaración inicial de las señales de OUTPUT
BB_SYSTEM_cout_Out,
BB_SYSTEM_sum_Out ,
// Declaración inicial de las señales de INPUT
BB_SYSTEM_a_In ,
BB_SYSTEM_b_In ,
BB_SYSTEM_cin_In
): 
// ==DECLARACION DE ENTRADAS Y SALIDAS==
output BB_SYSTEM_cout_Out;
output BB_SYSTEM_sum_Out
input BB_SYSTEM_a_In;
input BB_SYSTEM_b_In;
input BB_SYSTEM_cin_In;

```

Para conectar físicamente las señales. Declaraciones Wire y Reg

```verilog
wire TB_SYSTEM_cout_Out; // Las salidas simples se definen con "WIRE"
reg TB_SYSTEM_a_In; // Lo que "almacena" alguna variable entre dos elementos es un REG
...etc
```

Instanciación (uso de módulos, invocación de funciones)
**Instanciar:** Conectar componentes de menor jerarquía con componentes de mayor jerarquía.

```verilog
BB_SYSTEM BB_SYSTEM_u0( //Función de conexión entre BB_SYSTEM y TB_SYSTEM
// Conexiones entre puertos "maestros" (de mayor categoría) con señales/registros
	 .BB_SYSTEM_cout_Out(TB_SYSTEM_coutOUT), //CONECTAR (valor) de salida TestBench a la...
//...señal interna del componente
	.BB_SYSTEM_sum_Out(TB_SYSTEM_sum_Out) , //Conecta la salida interna con la (salida TB).
	.BB_SYSTEM_a_In(TB_SYSTEM_a_In ) , // Pasar la señal de prueba de TB a (SYSTEM_a_IN)
...etc
```
