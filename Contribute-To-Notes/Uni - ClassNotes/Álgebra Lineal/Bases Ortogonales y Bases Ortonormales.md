## Recordar, concepto de ortogonalidad:
Dos vectores $\{\vec{v_{1}}, \vec{v_{2}}\}$ son ortogonales sí y sólo si:  $\vec{v_{1}}\cdot \vec{v_{2}} = 0$.

### Definición de ortogonal:
Conjunto $\{x_1,x_2,\dots,x_n\}$ es un conjunto ortogonal: $\forall i=j \iff  \ <x_i \cdot x_j> = 0$   

### Definición de ortonotmal:
Si además de ser ortogonal su magnitud es cero. i.e. 
Conjunto $\{x_1,x_2,\dots,x_n\}$ es un conjunto ortonormal: $\forall i=j \iff  \ <x_i \cdot x_j> = 0$ &  $\forall i=j \iff  \ \sqrt{x_{i}^n x_{j}^n} = 1$.

## Recordar bases:
- Todo conjunto de $\{x_1,x_2,\dots,x_n\} \in \Re^{n}$ que además sea ortonormal u ortogonal será linearmente dependiente.
- Independencia lineal: La única solución a un sistema con columnas vectores del conjunto $\{x_1,x_2,\dots,x_n\}$ es la trivial $= \vec{0}$ .

# Encontrar una base ortogonal:
Referirse a [[Bases y Dimensión]] para recordar el procedimiento de encontrar una base. Una vez encontrada/dada una base:

Se tiene la base $B=\{\vec{v_{1}},\vec{v_{2}},\dots,\vec{v_{n}}\}$ se empieza el proceso de Grand Schmidt:
> Nótese, los vectores de la base ortogonal $W_{\perp}$ se denominan $w_{1}, \dots, w_{n}$ 

1. Se establece la igualdad $\vec{v_{1}} = \vec{w_{1}}$.
2. Para encontrar $\vec{w_{2}}:$
$$\vec{w_{2}} = (v_{2} - \frac{v_{2}\cdot w_{1}}{ w_{1} \cdot  w_{1}}* w_{1})$$
2. Para encontrar $\vec{w_{3}}:$
$$\vec{w_{3}} = (v_{3} - \frac{v_{3}\cdot w_{1}}{ w_{1} \cdot  w_{1}}* w_{1} - \frac{v_{3}\cdot w_{2}}{ w_{2} \cdot  w_{2}}* w_{2})$$
$$\vec{w_{3}} = v_{3} - ((\frac{v_{3}\cdot w_{1}}{ w_{1} \cdot  w_{1}}* w_{1})   + (\frac{v_{3}\cdot w_{2}}{ w_{2} \cdot  w_{2}}* w_{2}))$$
3. Para encontrar $\vec{w_{n}}:$
$$\vec{w_{n}} = v_{n} - (\sum_{i=1}^{n-1}\frac{v_{n}\cdot w_{i}}{w_{i} \cdot w_{i} }{w_{i} }) = v_{n} - \sum proy_{w}(\vec{v})$$
# Encontrar una base ortonormal:
1. Encontrar una base ortonormal. Tal que se tiene una base $W = {\{\vec{w_{1}},\vec{w_{2}},\dots,\vec{w_{n}}\}}$
2. Normalizar cada vector de la base, para encontrar la base ortonormal $S = {\vec{s_{1}},\vec{s_{2}},\dots,\vec{s_{n}}\}}$ dónde cada $||\vec{s_{n}}|| = 1$ para eso:
$$s_{n} = \frac{1}{||\vec{w_{1}}||}\cdot \vec{w_{n}}$$
Dividir cada vector no normal entre su magnitud.
Eso es todo.

