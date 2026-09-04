const express = require('express');

require('dotenv').config();

const productosRoutes =
require("./Src/routes/productos.routes");

const categoriasRoutes =
require("./Src/routes/categorias.routes");

const cajerosRoutes =
require("./Src/routes/cajeros.routes");

const ventaRoutes =
require('./Src/routes/venta.routes');

const app = express();

const PORT = 3000;

app.use(express.json());

app.use('/api', productosRoutes);
app.use('/api', categoriasRoutes);
app.use('/api', cajerosRoutes);
app.use('/api/ventas', ventaRoutes);

app.listen(PORT, () => {
console.log(`Server is running on http://localhost:${PORT}`);
});
