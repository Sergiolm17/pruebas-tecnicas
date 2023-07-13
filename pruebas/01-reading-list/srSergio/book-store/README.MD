##Descripcion de la aplicación

Mi aplicación tiene como objetivo brindar a los usuarios la posibilidad de explorar nuestro catálogo de libros y crear una lista de lectura personalizada. A continuación, se detallan los aspectos clave de la aplicación:

-Filtro por género: los usuarios pueden filtrar los libros por género.
-Responsive: la aplicación se adapta a diferentes tamaños de pantalla.
-LocalStorage: la aplicación almacena la lista de lectura en el almacenamiento local del navegador.

##Arbol de archivos

```
├── App.tsx
├── components
│   ├── Card.tsx
│   ├── Filter.tsx
│   └── Sidebar.tsx
├── data
│   ├── book.ts
│   └── interface.ts
├── hook
│   └── useLocalStorage.ts
├── index.css
├── index.tsx
├── service
│   ├── filter.ts
│   └── utils.ts
└── styles
    └── index.css
```

##URL de la aplicación

[DEPLOY IN VERCEL](https://pruebas-tecnicas-three.vercel.app/)
