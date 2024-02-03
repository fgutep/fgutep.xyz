Dónde $T$ es transformación lineal.
Propiedades:
1. Preserva y respeta el vector cero. Es decir $\vec{0} \in T$
2. Cerradura bajo suma: $T(x+y) = T(x) + T(Y)$ 
3. Cerradura bajo multiplicación por escalar: $\lambda \in {\Re}$  y $\vec{x}  \in T$ dónde $T(\lambda \vec{x})  =  \lambda*T(\vec{x})$

Adicionalmente, las propiedades 2,3 experimentan conmutividad, por lo cúal se pueden resumir en:

Dónde $\vec{u}, \vec{w}$ sean vectores de dimensión correcta para la transformación y $\lambda \in \Re$:
$$T(\vec{u}+\lambda\vec{w}) = T(U) + \lambda(T(W))$$


**TMA:** Dada $T: \Re^{n} \rightarrow \Re^{m}$ transformación lineal. Existe una ínica matriz de $A$ tal que $\forall \vec{x} \in \Re^{n}: T(\vec{x}) = A\vec{x}$. Además, provisto que $\{\vec{e_{1}},\dots,\vec{e_{n}}\}$ es la base canónica de $\Re^{m}$.

$$A = [T(e_{1})| T(e_{2})| \dots | T(e_{n})]$$ dónde $T(e_{k})$ serán columnas de la matriz.

Esta matriz se le llama la matriz estándar asociada a $T$. Ó la "representación matricial de $T$". Esta matriz se denota $A_{T}$.

**Kernel de una transformación lineal:**
Todos los vectores $\vec{v} \in \Re^{n}$ que al aplicarles la transformación resultan en $\vec{0}$.

$$ker(T) = N_{A} = Sol(a*\vec{x} =0)$$
El kernel de $T$ será igual a la nulidad de la matriz $A$ que hemos definido.

# Espacio generado:
Algoritmo para encontrar una base de un espacio:
1. Llevar la matriz a su Forma Escalonada Reducida.
2. Elegir columnas con pivote (dependientes).
3. Plantear la base con las columnas que tienen pivote. T.Q. dónde $[\vec C_{1}|\vec C_{2}|\dots]$ son columnas que tienen pivote. Será la base $B$ :
$$B= \{(\vec{C_{1}}),(\vec{C_{2}}),\dots,(\vec{C_{n}})\}$$

## Cómo encontrar el ker(T):
(Dónde $T$ es tra.Lineal y $A=A_{T}$)
1. Plantear la matriz elemental $(A|\vec{0})$.
2. Llevar la matriz $(A|\vec{0})$ a su FER.
3. Identificar columnas independientes(no pivotes) y dependientes(pivotes).
4. Despejar variables en términos de las independientes.
5. Encontrar la solución general a $A*\vec{x} = 0$ en forma de combinación lineal. Los vectores formarán una base.

## Cómo encontrar el Im(T):
1. Lleve la matriz $A$ a su FER. Identifique en la FER de $A$ las columnas dónde hay pivotes.
2. Una base para $Im(T) = C_{A}$ está formada por las columnas de $A$ originales ($C_{A}$) correspondientes a los pivotes encontrados. 

## TMA algorítmico para Im(T) y Ker(T)
1) dim(ker(T)) = # columnas de T sin pivotes.
2) dim(Im(T)) = # columnas de T con pivotes.

# TMA de la dimensión:
 Sea $T: \Re^{n} \rightarrow \Re^{m}$ transformación lineal:$$dim(ker(T)) + dim(Im(T)) = n$$
 # Será Sobreyectiva sí:
1) Encuentre $Im(T)$ cómo establecido anteriormente.
2) Será sobreyectiva si $dim(Im(T)) = \Re^{n}$.

 ### Sera Biyectiva sí:
 $T: \Re^{n} \rightarrow \Re^{m}$ $$m = n \iff ker(T) = \vec{0} \iff Im(T) = \Re^{m}$$