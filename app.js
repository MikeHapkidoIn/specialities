//configurar servidor express
//crear array con datos de usuario
//crear funcion que filtre usuarios por especialidad
//crear rutas diferentes con literal string y html para cada una de las especialidades
//manejar errores
//iniciar servidor




const express = require('express');
const app = express();
const PORT = 3000;

// Datos de usuarios
const usersData = [
  { id: 1, name: 'Alice', age: 28, specialty: 'marketing' },
  { id: 2, name: 'Bob', age: 35, specialty: 'developers' },
  { id: 3, name: 'Charlie', age: 30, specialty: 'developers' },
  { id: 4, name: 'David', age: 25, specialty: 'QAs' },
  { id: 5, name: 'Emma', age: 32, specialty: 'ventas' },
  { id: 6, name: 'Frank', age: 28, specialty: 'marketing' },
  { id: 7, name: 'Grace', age: 34, specialty: 'developers' },
  { id: 8, name: 'Hank', age: 27, specialty: 'QAs' },
  { id: 9, name: 'Ivy', age: 31, specialty: 'ventas' },
  { id: 10, name: 'Jack', age: 29, specialty: 'marketing' },
  { id: 11, name: 'Karen', age: 36, specialty: 'developers' },
  { id: 12, name: 'Leo', age: 26, specialty: 'QAs' },
  { id: 13, name: 'Mia', age: 33, specialty: 'ventas' },
  { id: 14, name: 'Nathan', age: 30, specialty: 'marketing' },
  { id: 15, name: 'Olivia', age: 37, specialty: 'developers' },
  { id: 16, name: 'Paul', age: 24, specialty: 'QAs' },
  { id: 17, name: 'Quinn', age: 32, specialty: 'ventas' },
  { id: 18, name: 'Ryan', age: 28, specialty: 'marketing' },
  { id: 19, name: 'Sara', age: 35, specialty: 'developers' },
  { id: 20, name: 'Tom', age: 29, specialty: 'QAs' },
  { id: 21, name: 'Uma', age: 30, specialty: 'ventas' },
  { id: 22, name: 'Victor', age: 27, specialty: 'marketing' },
  { id: 23, name: 'Wendy', age: 34, specialty: 'developers' },
  { id: 24, name: 'Xander', age: 31, specialty: 'QAs' },
  { id: 25, name: 'Yara', age: 33, specialty: 'ventas' },
  { id: 26, name: 'Zack', age: 28, specialty: 'marketing' },
  { id: 27, name: 'Ava', age: 36, specialty: 'developers' },
  { id: 28, name: 'Bryan', age: 26, specialty: 'QAs' },
  { id: 29, name: 'Cynthia', age: 32, specialty: 'ventas' },
  { id: 30, name: 'Derek', age: 30, specialty: 'marketing' },
];


const getUsersBySpecialty = (specialty) => {
  return usersData.filter(user => user.specialty === specialty);
};

// Rutas para marketing, developers, ventas y qas
app.get('/', (req, res) => {
  res.send(`
    <nav>
      <a href= 'marketing'>Marketing</a>
      <a href= 'developers'>Developers</a>
      <a href= 'QAs'>QAs</a>
      <a href= 'Ventas'>Ventas</a>
    </nav>
    `);
});

app.get('/marketing', (req, res) => {
  const specialty = 'marketing';
  const users = getUsersBySpecialty(specialty);

  const pageContent = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Marketing</title>
    </head>
    <body>
      <a href ='/'>Volver</a>
      <h1>Marketing</h1>
      <p>Número de personas: ${users.length}</p>
      <ul>
        ${users.map(user => `<li>${user.name} - Edad: ${user.age}</li>`).join('')}
      </ul>
    </body>
    </html>
  `;

  res.send(pageContent);
});

app.get('/developers', (req, res) => {
  const specialty = 'developers';
  const users = getUsersBySpecialty(specialty);

  const pageContent = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Developers</title>
    </head>
    <body>
      <a href ='/'>Volver</a>
      <h1>Developers</h1>
      <p>Número de personas: ${users.length}</p>
      <ul>
        ${users.map(user => `<li>${user.name} - Edad: ${user.age}</li>`).join('')}
      </ul>
    </body>
    </html>
  `;

  res.send(pageContent);
});


app.get('/QAs', (req, res) => {
    const specialty = 'QAs';
    const users = getUsersBySpecialty(specialty);
  
    const pageContent = `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>QAs</title>
      </head>
      <body>
        <a href ='/'>Volver</a>
        <h1>QAs</h1>
        <p>Número de personas: ${users.length}</p>
        <ul>
          ${users.map(user => `<li>${user.name} - Edad: ${user.age}</li>`).join('')}
        </ul>
      </body>
      </html>
    `;
  
    res.send(pageContent);
  });

  
app.get('/ventas', (req, res) => {
    const specialty = 'ventas';
    const users = getUsersBySpecialty(specialty);
  
    const pageContent = `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Ventas</title>
      </head>
      <body>
        <a href ='/'>Volver</a>
        <h1>Ventas</h1>
        <p>Número de personas: ${users.length}</p>
        <ul>
          ${users.map(user => `<li>${user.name} - Edad: ${user.age}</li>`).join('')}
        </ul>
      </body>
      </html>
    `;
  
    res.send(pageContent);
  });
// Manejar  errores 404
app.use((req, res) => {
  res.status(404).send('404 - Página no encontrada');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto http://localhost:${PORT}`);
});

/*
// Codigo del Profe

const express = require('express')
const app = express()
const PORT = 3000

const usersData = [
  { id: 1, name: 'Alice', age: 28, specialty: 'marketing' },
  { id: 2, name: 'Bob', age: 35, specialty: 'developers' },
  { id: 3, name: 'Charlie', age: 30, specialty: 'developers' },
  { id: 4, name: 'David', age: 25, specialty: 'QAs' },
  { id: 5, name: 'Emma', age: 32, specialty: 'ventas' },
  { id: 6, name: 'Frank', age: 28, specialty: 'marketing' },
  { id: 7, name: 'Grace', age: 34, specialty: 'developers' },
  { id: 8, name: 'Hank', age: 27, specialty: 'QAs' },
  { id: 9, name: 'Ivy', age: 31, specialty: 'ventas' },
  { id: 10, name: 'Jack', age: 29, specialty: 'marketing' },
  { id: 11, name: 'Karen', age: 36, specialty: 'developers' },
  { id: 12, name: 'Leo', age: 26, specialty: 'QAs' },
  { id: 13, name: 'Mia', age: 33, specialty: 'ventas' },
  { id: 14, name: 'Nathan', age: 30, specialty: 'marketing' },
  { id: 15, name: 'Olivia', age: 37, specialty: 'developers' },
  { id: 16, name: 'Paul', age: 24, specialty: 'QAs' },
  { id: 17, name: 'Quinn', age: 32, specialty: 'ventas' },
  { id: 18, name: 'Ryan', age: 28, specialty: 'marketing' },
  { id: 19, name: 'Sara', age: 35, specialty: 'developers' },
  { id: 20, name: 'Tom', age: 29, specialty: 'QAs' },
  { id: 21, name: 'Uma', age: 30, specialty: 'ventas' },
  { id: 22, name: 'Victor', age: 27, specialty: 'marketing' },
  { id: 23, name: 'Wendy', age: 34, specialty: 'developers' },
  { id: 24, name: 'Xander', age: 31, specialty: 'QAs' },
  { id: 25, name: 'Yara', age: 33, specialty: 'ventas' },
  { id: 26, name: 'Zack', age: 28, specialty: 'marketing' },
  { id: 27, name: 'Ava', age: 36, specialty: 'developers' },
  { id: 28, name: 'Bryan', age: 26, specialty: 'QAs' },
  { id: 29, name: 'Cynthia', age: 32, specialty: 'ventas' },
  { id: 30, name: 'Derek', age: 30, specialty: 'marketing' },
];

const specialties = ["marketing", "ventas", "QAs", "developers"]

const getUsersbySpecialty = (specialty) => {
  return usersData.filter(user => user.specialty === specialty)
}

app.get('/', (req, res) => {
  res.send(`
    <nav>
      <a href="/marketing">marketing</a>
      <a href="/developers">developers</a>
      <a href="/QAs">QAs</a>
      <a href="/ventas">ventas</a>
    </nav>
  `)
})

specialties.forEach(route =>{
  app.get(`/${route}`, (req, res) => {
    const specialty = route
    const filterUsers = getUsersbySpecialty(specialty)
    // console.log(filterUsers)
    res.send(template(specialty, filterUsers))
  })
})


// app.get('/marketing', (req, res) => {
//   const specialty = 'marketing'
//   const filterUsers = getUsersbySpecialty(specialty)
//   // console.log(filterUsers)
//   res.send(template(specialty, filterUsers))
// })

// app.get('/developers', (req, res) => {
//   const specialty = 'developers'
//   const filterUsers = getUsersbySpecialty(specialty)
//   // console.log(filterUsers)
//   res.send(template(specialty, filterUsers))
// })

// app.get('/QAs', (req, res) => {
//   const specialty = 'QAs'
//   const filterUsers = getUsersbySpecialty(specialty)
//   // console.log(filterUsers)
//   res.send(template(specialty, filterUsers))
// })

// app.get('/ventas', (req, res) => {
//   const specialty = 'ventas'
//   const filterUsers = getUsersbySpecialty(specialty)
//   // console.log(filterUsers)
//   res.send(template(specialty, filterUsers))
// })

app.use((req, res) => {
  res.status(404).send('404 - página no encontrada')
})


const template = (specialty, filterUsers) => {
  return `
    
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
      </head>
      <body>
        <a href="/">Volver</a>
        <h1>${specialty}</h1>
        <ul>
        ${filterUsers.map(user => {
          const {name, age} = user
          return `<li>name: ${name} - age: ${age}</li>`
        }).join("")}
          
        </ul>

      </body>
    
  `
}




app.listen(PORT, () => {
  console.log(`Está escuchando en el puerto http://localhost:${PORT}`)
})
*/