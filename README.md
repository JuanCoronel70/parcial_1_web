# Parcial 1 - Programación con Tecnologías Web

Este proyecto consiste en el desarrollo de una aplicación web utilizando tecnologías como React para el frontend. El objetivo es crear un conjunto de componentes que permitan al usuario interactuar con la aplicación para ver información de un perfil, ver detalles de publicaciones y realizar algunas acciones básicas.

## Pasos para ejecutar el proyecto

A continuación se detallan los pasos necesarios para ejecutar el proyecto:

### Frontend (React)

1. Tener Node.js instalado
2. Clonar el repositorio del proyecto desde [GitHub](https://github.com/JuanCoronel70/parcial_1_web.git).
3. Navegar hasta la carpeta del proyecto frontend (`cd parcial_1_web`).
4. Instalar las dependencias del proyecto utilizando npm o yarn: `npm install` o `yarn install`.
5. Ejecutar la aplicación React: `npm start` o `yarn start`.
6. En caso de que salga que falta algun modulo por instalar al correr la aplicacion, instalar las siguientes depedencias de manera manual:
    - `npm install react-bootstrap bootstrap`
    - `npm install react-router-dom`
    - `npm install react-intl`

### Acceder a la aplicación

Una vez que el frontend esté en funcionamiento, podrás acceder a la aplicación a través de tu navegador web en la dirección `http://localhost:3000`.

En el archivo App.js se definen las rutas de navegación utilizando el enrutador proporcionado por react-router-dom. Cada ruta especifica una URL y el componente que se renderizará cuando esa URL coincida con la ruta actual. Aquí está el desglose de las rutas definidas y los componentes asociados a cada una:

Ruta /Home:

Componente asociado: Home
Funcionamiento del componente: El componente Home representa la página principal de la aplicación. En esta página se muestra la información general del usuario y una serie de imágenes o publicaciones. La información del usuario se obtiene mediante una solicitud a un servicio mock y se muestra en el componente. Además, se muestran una serie de imágenes que también se obtienen mediante una solicitud a una URL específica. Finalmente, cuando el usuario le da click a una publicacion, esta se despliega en un Modal donde se amplia a mas detalle la imagen.

Ruta /Perfil:

Componente asociado: Perfil
Funcionamiento del componente: Al dar click en la imagen del perfil del usuario en Home, se redirige hacia este componente o hacia perfil editable. El componente Perfil muestra los detalles del perfil del usuario. La información del perfil se obtiene de un servicio mock y se muestra en el componente. El usuario puede ver su nombre de usuario, nombre completo, descripción del perfil y URL personal. Además, se proporciona un botón para guardar cambios en el perfil.

Ruta /PerfilEditable:

Componente asociado: PerfilEditable
Funcionamiento del componente: El componente PerfilEditable permite al usuario editar su perfil. Similar al componente Perfil, se obtiene la información del perfil de un servicio mock y se muestra en el formulario editable. El usuario puede modificar su nombre de usuario, nombre completo, descripción del perfil y URL personal. También se proporciona un botón para guardar los cambios realizados en el perfil.

Estos son los componentes asociados a cada ruta en App.js y cómo funcionan. Cada componente representa una página específica de la aplicación y proporciona diferentes funcionalidades para interactuar con la aplicación y visualizar la información del usuario.

## Reporte de Decisiones y Proceso de Desarrollo

Durante el desarrollo de este proyecto se tomaron varias decisiones con el objetivo de cumplir con los requisitos y lograr una implementación eficiente y escalable. A continuación, se detallan algunas de estas decisiones y el proceso de desarrollo:

- **Tecnologías Utilizadas**:  Se decidió utilizar React para el frontend debido a su flexibilidad y eficiencia en la creación de interfaces de usuario interactivas. Además, se optó por utilizar Bootstrap para el diseño y la maquetación de la interfaz de usuario. Bootstrap proporciona un conjunto de herramientas útiles y componentes preestilizados que facilitan el desarrollo de interfaces atractivas y responsivas. Al combinar React con Bootstrap, se logra una combinación poderosa que permite desarrollar rápidamente interfaces de usuario modernas y atractivas, manteniendo al mismo tiempo la consistencia y la usabilidad en diferentes dispositivos y tamaños de pantalla.

- **Estructura del Proyecto**: Se organizó el proyecto en una estructura de carpetas clara y modularizada, separando el frontend para facilitar el mantenimiento y la escalabilidad del código.

- **Internacionalización (I18N)**: Se implementó la internacionalización de los labels estáticos de la aplicación utilizando la biblioteca `react-intl`, lo que permite soportar varios idiomas, incluyendo inglés y español.

- **Mock de Datos**: Se creó un servicio mock muy basico y manual para generar los datos requeridos del usuario en el frontend, lo que permite simular la obtención de datos de un servidor real y facilita el desarrollo y la prueba de la aplicación. Este fue creado manualmente subiendo un .json con los usuarios al GitHub del repositorio el archivo "data.json".

- **Componentes Reutilizables**: Se crearon componentes reutilizables en React para maximizar la modularidad y la reutilización de código, lo que facilita el desarrollo y el mantenimiento de la aplicación.

### Componentes y Elementos de React Utilizados
En el desarrollo de la aplicación, se utilizaron varios componentes y elementos de React para construir la interfaz de usuario interactiva y dinámica. A continuación, se detallan algunos de los principales componentes y elementos de React utilizados en la aplicación:

Componentes Funcionales: Se utilizaron componentes funcionales para la mayoría de las partes de la aplicación. Los componentes funcionales son simples funciones de JavaScript que devuelven elementos JSX y pueden aceptar propiedades (props) como argumentos.

useState Hook: El useState Hook se utilizó para manejar el estado local en los componentes funcionales. Se utilizó para almacenar y actualizar el estado de ciertos elementos de la interfaz de usuario, como la información del usuario y el estado de los formularios.

useEffect Hook: El useEffect Hook se utilizó para realizar efectos secundarios en los componentes funcionales. Se utilizó para cargar datos del servidor, como la información del usuario, y realizar otras operaciones después de que el componente se haya montado en el DOM.

Router y Rutas: Se utilizó el enrutador proporcionado por react-router-dom para gestionar la navegación entre las diferentes vistas de la aplicación. Se definieron rutas para cada vista y se asociaron con los componentes correspondientes. Esto permitió que la aplicación respondiera correctamente a las URL y mostrara los componentes correctos según la ruta actual.

Componentes de Bootstrap: Se utilizaron componentes de Bootstrap para el diseño y la maquetación de la interfaz de usuario. Bootstrap proporciona una serie de componentes preestilizados que facilitan la creación de interfaces atractivas y responsivas. Se utilizaron componentes como Container, Row, Col, Button y Modal para estructurar y diseñar la interfaz de usuario de la aplicación.

useNavigate Hook: El useNavigate Hook se utilizó para la navegación programática entre las rutas de la aplicación. Se utilizó en conjunto con el enrutador de react-router-dom para permitir la navegación a diferentes vistas de la aplicación mediante programación, por ejemplo, al hacer clic en un botón o completar un formulario.
