# OrganigramaApp

## Instalación

No olviden ejecutar el siguiente comando en la terminal para reconstruir los módulos de node e instalar las dependencias:
```
	npm install
```

Ejecutar el siguiente comando en la terminal para instalar JSON Server:
```
	npm install -g json-server
```
Crear un archivo "db.json" y pegar lo siguiente:
```
{
  "empresas": [
    {
      "id": 1,
      "profile": "assets/brands/empresa.png",
      "name": "Facebook",
      "areas": "10",
      "equipos": "14",
      "usuarios": "78",
      "backgroundColor": "#DC143C"
    },
    {
      "id": 2,
      "profile": "assets/brands/empresa2.png",
      "name": "Twitter",
      "areas": "10",
      "equipos": "14",
      "usuarios": "78",
      "backgroundColor": "#DC143C",
      "upperManagerId": "empresa-1"
    },
    {
      "id": 3,
      "profile": "assets/brands/empresa3.png",
      "name": "Instagram",
      "areas": "10",
      "equipos": "14",
      "usuarios": "78",
      "backgroundColor": "#DC143C",
      "upperManagerId": "empresa-1"
    },
    {
      "profile": "assets/brands/empresa.png",
      "name": "Movistar",
      "areas": "12",
      "equipos": "12",
      "usuarios": "12",
      "upperManagerId": "empresa-1",
      "backgroundColor": "#DC143C",
      "id": 4
    },
    {
      "profile": "assets/brands/empresa2.png",
      "name": "Interbank",
      "areas": "12",
      "equipos": "15",
      "usuarios": "50",
      "upperManagerId": "empresa-1",
      "backgroundColor": "#DC143C",
      "id": 5
    }
  ],
  "empleados": [
    {
      "id": 4,
      "tipo": "Área",
      "nombre": "Recursos Humanos",
      "profile": "assets/profiles/profile2.png",
      "fullname": "Álvaro",
      "cargo": "Lider",
      "backgroundColor": "#C71585",
      "upperManagerId": "empresa-2"
    },
    {
      "id": 5,
      "tipo": "Equipo",
      "nombre": "UX Design",
      "profile": "assets/profiles/profile2.png",
      "fullname": "Sabrina",
      "cargo": "Lider",
      "backgroundColor": "#E67E22",
      "upperManagerId": "empresa-2"
    },
    {
      "id": 6,
      "tipo": "Equipo",
      "nombre": "Informática",
      "profile": "assets/profiles/profile3.png",
      "fullname": "Fabricio",
      "cargo": "Lider",
      "backgroundColor": "#E67E22",
      "upperManagerId": "empresa-3"
    },
    {
      "upperManagerId": "empresa-4",
      "tipo": "Área",
      "nombre": "Finanzas y Contabilidad",
      "profile": "assets/profiles/profile2.png",
      "fullname": "María",
      "cargo": "Lider",
      "backgroundColor": "#C71585",
      "id": 7
    },
    {
      "upperManagerId": "empleado-7",
      "profile": "assets/profiles/profile4.png",
      "fullname": "Pedro",
      "cargo": "Empleado",
      "backgroundColor": "#28B463",
      "id": 8
    },
    {
      "upperManagerId": "empleado-7",
      "profile": "assets/profiles/profile2.png",
      "fullname": "Jorgito",
      "cargo": "Colaborador",
      "backgroundColor": "#8A2BE2",
      "id": 9
    },
    {
      "upperManagerId": "empresa-4",
      "tipo": "Equipo",
      "nombre": "Equipo Rocket",
      "profile": "assets/profiles/profile2.png",
      "fullname": "Fernando",
      "cargo": "Lider",
      "backgroundColor": "#E67E22",
      "id": 10
    },
    {
      "upperManagerId": "empresa-4",
      "tipo": "Área",
      "nombre": "Recursos Humanos",
      "profile": "assets/profiles/profile3.png",
      "fullname": "Susana",
      "cargo": "Lider",
      "backgroundColor": "#C71585",
      "id": 11
    },
    {
      "upperManagerId": "empleado-4",
      "profile": "assets/profiles/profile5.png",
      "fullname": "Javier",
      "cargo": "Colaborador",
      "backgroundColor": "#8A2BE2",
      "id": 12
    },
    {
      "upperManagerId": "empleado-4",
      "profile": "assets/profiles/profile2.png",
      "fullname": "Claudia",
      "cargo": "Empleado",
      "backgroundColor": "#28B463",
      "id": 13
    },
    {
      "upperManagerId": "empleado-4",
      "profile": "assets/profiles/profile3.png",
      "fullname": "Juan",
      "cargo": "Empleado",
      "backgroundColor": "#28B463",
      "id": 14
    },
    {
      "upperManagerId": "empresa-5",
      "tipo": "Área",
      "nombre": "Recursos Humanos",
      "profile": "assets/profiles/profile2.png",
      "fullname": "Juan",
      "cargo": "Lider",
      "backgroundColor": "#C71585",
      "id": 15
    },
    {
      "upperManagerId": "empleado-15",
      "profile": "assets/profiles/profile3.png",
      "fullname": "María",
      "cargo": "Colaborador",
      "backgroundColor": "#8A2BE2",
      "id": 16
    }
  ]
}
```

Abrir otra ventana de la terminal, navegar hacia la carpeta en donde se encuentra su archivo "db.json" y ejecutar el siguiente comando:
```
json-server --watch db.json
```

Abrir otra ventana de la terminal y ejecutar la aplicación:
```
ng serve -o
```