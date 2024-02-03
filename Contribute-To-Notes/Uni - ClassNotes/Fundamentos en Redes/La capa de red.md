[[Fundamentos en Redes/Fundamentos en Redes]]
¿Cúal es el papel de la capa de red?
![[Capas-CapasRed.svg]]
La capa de red está estrechamente relacionada con la topología de red.
![[TopologíaFisLog.svg]]
## ¿De qué dependen las rutas lógicas elegidas?
- Distancia
- Tráfico
- Taza de transmisión
- Dominio administrativo (ISPs, FInanzas, Costos)
- Estadísticas basadas.

*Nótese: Cada ruta va a tener un costo asociada a ella*

# Direccionamiento IP:
![[Topología-ISPs.svg]]
Hay múltiples servidores y clientes conectados a diferentes ISPs de Tier 3 (nivel más bajo). Debajo de cada Tier 3 hay sub-redes.

## Máscara de subred:
Número de 32-bits que pone inicia en 0b-*32x0* (Todo en ceros) y se van incrementando los bits desde la fuente conforme avanza en la red.

- Cada red (nodo/switch) otorga a las tarjetas de red conectadas a sí una dirección inicial para dentro de su misma red. 
- Se pueden conectar hasta 256 tarjetas de red a una única sub-red (nodo).
- Entre más subo por la jerarquía de sub-redes y amuenta la cantidad de nodos entonces podré conectar más tarjetas de red. Básicamente $255^k$ dónde K es el numero de nodos conectados jerárquicamente.

Ref: *RFC 4632*

Identificar Sub-Redes: *Desconectar todos los enlaces entre enrutadores y contar tarjetar de red $\rightarrow$ enrutadores.*
![[SubNets.svg]]
## Protocolo DHCP:

Otorga las direcciones IP dinámicamente, para poder lidiar con una red variable dónde los clientes se mueven, conectan y desconectan. El protocolo consta de 4 mensajes.
![[DHCP1.svg]]
