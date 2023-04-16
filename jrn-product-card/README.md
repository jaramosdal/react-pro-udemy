# JRN-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### Javier Ramos Nodal

## Ejemplo

```
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from  jrn-product-card'
```

```
<ProductCard
    key={product.id}
    product={product}
    initialValues={{
        count: 4,
        maxCount: 10,
    }}
>
    {({ reset, increaseBy, isMaxCountReached, count, maxCount }) => (
        <>
        <ProductImage />
        <ProductTitle />
        <ProductButtons />
        </>
    )}
</ProductCard>
```
