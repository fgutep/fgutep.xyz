Interfaz: La conexión entre un host y un link físico. (i.e. Puertos de red, WiFi, etc)

Each interface on every host and router in the global Internet must have an IP address that is globally unique (except for interfaces behind NATs, as discussed in Section 4.3.3). These addresses cannot be chosen in a willy-nilly manner, however. A portion of an interface's IP address will be determined by the subnet to which it is connected.
## Subnets
**Subnet:** Se denominan múltiples hosts conectados bajo el mismo **router.**
**Máscara de Subnet:** Se usa una porción de bits, los 24-bits más hacia la izquierda (una dirección IP contiene 32-bits) de una dirección IP para la *dirección de la subnet.* Estos 24-bits serán los mismos para todos los dispositivos conectados bajo un mismo router, los bits restantes (8-bits; e.g 192.160.1.xxx, dónde xxx denota el valor decimal de los últimos 8 bits)  se asignarán a cada host de manera única (es decir, podrán haber 254 hosts bajo la misma máscara de subnet).
![[Pasted image 20231108084921.png]]
Notación:  As with subnet addressing, the 32-bit IP address is divided into two parts and again has the dotted-decimal form a.b.c.d/x, where x indicates the number of bits in the first part of the address.
Dónde  a *"a.b.c"* se le determina el *prefijo*.

![[Pasted image 20231108085551.png]]
En esta imágen se puede ver un caso de "organización" dónde se tienen múltiples sub-nets con prefijos continuos (en su tercer valor 223.1.$k$.*x*) dónde $k$ es el número continuo asignado por la CIDR.

## Clases de subnets:
Since subnets with 8-, 16-, and 24-bit subnet addresses were known as class A, B, and C networks, respectively. The requirement that the subnet portion of an IP address be exactly 1, 2, or 3 bytes long turned out to be problematic for supporting the rapidly growing number of organizations with small and medium-sized subnets. A class C (124) subnet could accommodate only up to 28 - 2 = 254 hosts (two of the 28 = 256 addresses are reserved for special use)-too small for many organizations. However, a class B (/16) subnet, which supports up to 65,634 hosts, was too large. Under classful addressing, an organization with, say, 2,000 hosts was typically allocated a class B (/16) subnet address. This led to a rapid depletion of the class B address space and poor utilization of the assigned address space. For example, the organization that used a class B address for its 2,000 hosts was allocated enough of the address space for up to 65,534 interfaces-leaving more than 63,000 addresses that could not be used by other organizations.

## IP Broadcast:
Si un host envía un datagrama con destino 255.255.255.255  se enviará a todos los hosts bajo la misma subnet.

## Un bloque de direcciones IP:
![[Pasted image 20231108090531.png]]
Una ISP puede revender parte de sus segmentos casi que por bits individuales a organizaciones que estén bajo sí misma.

## DHCP
Protocolo automático que maneja y es responsable para la asignjación de IPs dentro de una organización o dentro de un bloque de direcciones (subnets). Este es un protocolo dinámico que manerjará desconexiones, nuevas conexiones y flujo de dispositivos por ejemplo de AP a AP.
![[Pasted image 20231108090918.png]]
Esto permite que se hagan "descubrimientos de servidor DHCP" para poder encontrar una lista de direcciones dentro de la subnet y que cada paquete llegue a su destino particular sin conocer más que la dirección del segmento general y preguntando al servidor DHCP.

## NAT
El protocolo NAT permite tener múltiples dispositivos clientes dentro de una misma *red local privada* (e.g. residencial) que envían su tráfico bajo una única dirección IP. Para hacer esto el router con NAT configurado le asigna una dirección ip con segmento de $/24$ a cada cliente conectado a el tal que $1.0.0.0/24$ con el fin de poder distribuir el tráfico internamente, y el router tendrá una única dirección IP preestablecida "visible" para el intentet (e.g 250.98.5.7). De tal manera se pueden tener múltiples dispositivos bajo una red *domética* que comparten una IP y no se deben preocupar por segmentos.

Para diferenciar entre el tráfico que se envía de regreso a la red local NAT usa una tabla con "puertos" asignados correspondientemente a cada host "1.0.0.$x$".

