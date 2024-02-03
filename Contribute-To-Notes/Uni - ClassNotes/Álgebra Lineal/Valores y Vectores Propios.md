# Definición de valores propios:
Dada una matriz de valores $A$ para poder encontrar sus valores propios se establece:$$det(A-\lambda(Id)) = 0$$
Por ejemplo:
$$A = \begin{pmatrix}12 & 10 \\-15 & -13\end{pmatrix}$$
Será $A-\lambda(Id)$: $$A-\lambda(Id) = \begin{pmatrix}12 & 10 \\-15 & -13\end{pmatrix} - \lambda\begin{pmatrix}1 & 0 \\0 & 1\end{pmatrix}$$
Tal que $det(A-\lambda(Id)) = 0$ será:
$$det(A-\lambda(Id)) = (12 - \lambda)(-13 - \lambda)+15(0) = 0$$
$$det(A-\lambda(Id)) = \lambda^{2}+ \lambda - 6 = 0$$
Se le llama siempre a $\lambda^{2}+ \lambda - 6 = 0$ el *polinomio característico*.
**Los valores propios serán la solución al polinomio característico**

Es decir, para este caso, las raices, que serán:
$$\lambda^{2}+ \lambda - 6 = (x+3)(x−2) =0$$
**Valores propios:** $\lambda_{1} = -3$ y $\lambda_{2} = 2$


# Definición de vectores propios:
$$A*[v_{1}|\dots|v_{n}] = (V_{1}|\dots|V_{n})\cdot(\lambda(Id))$$
Será entonces $\vec{v}$ un vector propio si:
$$\vec{v}\in \Re \therefore A\cdot \vec{v} = \lambda \cdot \vec{v}$$Dónde $\lambda$ es el valor propio asociado al vector propio, y $A$ es la matriz de origen.

## Equivalencias para valores y vectores propios:
Suponga que $\lambda$ es valor propio para la matriz $A$ $\vec(v) \in \Re^{n}$ es un vector propio para a correspondiente a  $\lambda$ :
- $\iff A \cdot \vec{v} =  \lambda \cdot \vec{v}$
- $\iff A \cdot \vec{v}  - \lambda \cdot \vec{v} =  \vec{0}$
- $\iff A \cdot \vec{v} - (\lambda(Id)) = \vec{0}$
- $\iff (A \cdot \lambda(Id)) = 0$
- $\iff \vec{v} \in N_{(A-\lambda(Id))}$

# Calcular vectores propios:
### Espacio propio: $E_{\lambda_{n}} = A-\lambda(Id)$
1. Calcular el espacio propio. Para esto, tome la matriz original y réstele el producto de la identidad por un valor propio. Esto resultará en otra matriz.
(Siguiendo el ejemplo de valores propios)
Espacio propio para: $\lambda_{2} = 2$

$$E_{\lambda2}= A-2(Id) = \begin{pmatrix}12 & 10 \\-15 & -13\end{pmatrix} - \begin{pmatrix}2 & 0 \\0 & 2\end{pmatrix} = \begin{pmatrix}10 & 10 \\-15 & -15\end{pmatrix}$$
2. Calcular la base para el espacio propio (nueva matriz) hallado:
$$B_{E_{\lambda2}}= \{\begin{pmatrix}-1 \\1\end{pmatrix}\} $$
El vector que compone la base (i.e. $(-1,1)$ en este caso) será el **vector propio.**

3. Hacer para todos los vectores propios encontrados.
