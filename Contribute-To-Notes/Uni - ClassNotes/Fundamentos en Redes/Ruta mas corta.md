# Sistema autónomo / Ruta predefinida:
En internet los enrutadores se agrupan en "Sistemas autónomos".
![[IMAGEN-Con-CopyRight.png]]
> Nótese que $x$ es un *segmento de IP*.

Tabla de enrutamiento: Sin necesidad de que importe el destino, al "ver" que un paquete viaja hacia el destino ya sabe a qué otro router se debe transmitir.
- Enrutador borde: Los Routers responsables de cada sistema autónomo de transmitir información a otros sistemas autónomos.
# Concepto de grafo:
En redes de comunicación resulta especialmente útil usar gráfos para representar inteconexiones entre elementos de la misma. Un nodo no comprende la *geología* de la infraestructura *(i.e. Distancias es despreciable)* pero **es excelente para comprender la topología de la red.**
- $G=(N,E)$
- $N$ Conjunto de nodos. (Enrutadores)
- $E$ Conjunto de arcos (parejas de nodos/enlaces).
### Por ejemplo:
$N=\{u,v,x,y,z\}$ Hay 6 nodos.
$E_{1} = (u,v), (u,w), (u,x), (u,y), (u,z)$ Hay 5 enlaces desde $u$.
$u$ está en el centro y se conecta de ahí a $v,x,x,y,z$


