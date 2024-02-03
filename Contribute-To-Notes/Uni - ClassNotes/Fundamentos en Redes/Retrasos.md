[[Fundamentos en Redes/Fundamentos en Redes]]
### Tipos de retraso:
- Transmisión
- Propagación
- Procesamiento
- Espera (en filas)
#### Retraso por Transmisión:
![[Pasted image 20230927102658.png]]

**Para calcular el retraso de transmisión se emplea la fórmula:** #Calculos
$$T_{Tx} = \frac{Longitud}{Velocidad}*[N + (p-1)]$$
#### Retraso de propagación:
Cuanto tiempo tarda transmitir el paquete debido a distancias físicas.
**Velocidades de *conducción:***
- Wireless (Radio): $$C_{electromag} = 3*10^8 m/s$$
- Medio guiado (Físico, Cobre / Fibra):
$$V_{guiado}= 2*10^8 m/s$$
**Para calcular el retraso de propagación se emplea la formula:**
$$T_{propagación}= \frac{DistanciaFísica}{Velocidad Medio}$$

#### Delay de procesamiento:
El tiempo que cada procesador de cada uno de los dispositivos tarda en procesar y transferir internamente los bits **Idealización: Se considera despreciable.**
- Depende del reloj del procesador y de la aequitectura del mismo 
	- (e.g. Un procesador de 8-bits se demorará (a 2V) lo mismo que un procesador de 16-bits (a V)
**Para calcular el retraso de procesamiento se emplea la formula:**
$$T_{procesamiento} = \sum_{i=1}^{n-1}= \frac{LongitudBits}{VelocidadProcesamiento} $$
Pues se debe considerar la sumatoria de todos los nodos (ignorando enlace 0 cliente-nodo)

#### Delay de espera:
El tiempo que el paquete se demora en filas. Este depende de su prioridad en el sistema, en la jerarquía de ISPs y en la cantidad de flujo a un momento dado. **Idealización: Se considera despreciable.** 
**- Solo se podría aproximar basado en un histórico probabilistico de trafico de red anterior. 
Se puede considerar que el tiempo de espera es la diferencia del tiempo total - tiempos constantes. Pues el retraso de espera es únicamente variable.

$$ T_{espera} = T_{Total} - T_{ConstanteConocido} $$
## Ejercicio en clase:
- Tiempo de carga de un archivo de 20 MB para una conexión de 5 saltos. Cada salto tiene 300km de F.O. (Fibra Óptica)
	- 	Calcular la cantidad de paquetes:
		- (Idealización): Cada capa requiere 20 Bytes de header
		- **Para TCP el tamaño máximo de paquete es de 1500 Bytes**
		- Para calcular el tamaño de PayLoad real (descontando encabezados):
		 $$1500Bytes  - 20Bytes(4 Capas) = 1420 Bytes$$
		- Cálcular cuantos paquetes se necesitan para transmitir los 20 MB:
		$$20Mb = 20*10^7 Bytes$$
		$$Pckts = \frac{20*10^7Bytes}{1420 Bytes}= 14084.507 Pckts$$
		Sin embargo, cómo no podemos enviar "medios paquetes":
		$$Pckts= 14084Pckts + \lceil(720)\rceil Bytes$$
		Basado en el número de paquetes calculamos la cantidad de ventanas que se necesitan.
		Pasos:
		- Cantidad de paquetes para transmitir todo el archivo.
		- Cantidad de ventanas.
		- Tiempo de retraso de Transmisión para UNA ventana.
		- Multiplicar para hallar el Tiempo de Tx para **todas** las ventanas.
		- Retraso de medio (físico) Fibra óptica.
		
		
$$T_{Tx} = \frac{Longitud}{Velocidad}*[N + (p-1)] = \frac{(160 MBi)}{(Velocidad Salto)}$$ $$T_{Tx}= (\frac{160Mbi}{80Mbis}+\frac{160Mbi}{160Mbis}+\frac{160Mbi}{800Mbis}+\frac{160Mbi}{160Mbis}+\frac{160Mbi}{80Mbis})$$
