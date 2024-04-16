  //Componente o Funcion Header
  const Header = (props) =>{
    console.log("Funciona Header"+ props)
    return (
      <div>
        <p>{props.course}</p>
      </div>
    )
  }
  //Componente o Funcion Part
  const Part = (props) =>{
    if (!props.part && !props.exercises) {
      return <div>No se proporcionaron partes</div>;
    }
    console.log("r"+props)

    //props.part.foreach(value => {name = value})

    return (
      <div>
           <p>{props.parts['name']}: {props.parts['exercises']}</p>
      </div>
    )
  }
  //Componente o Funcion Content
  const Content = (props) =>{
    console.log("Funciona Content"+props)
    if (!props.parts) {
      return <div>No se proporcionaron partes</div>;
    }
    return (
      <div>
        
          <Part parts={props.parts.map(name => name)} />
        
      </div>
    )
  }
  //Componente o Funcion Total
  const Total = (props) => {
    console.log("Funciona Total")
    return (
      <div>
        <p>Number of exercises {props.parts[0]['exercises']+props.parts[1]['exercises']+props.parts[2]['exercises']}</p>
      </div>
    )
  }
  const App = () => {
    console.log("Funciona App")
    //datos de trabajo
    const course = "Half Stack application development "
    const parts = [
        {
        'name':'Fundamentals of React ',
        'exercises' : 10
        },
        { 
        'name': "Using props to pass data ",
        'exercises' : 7
        },
        {
        'name':"State of a component ",
        'exercises' : 14
        }
    ]
    //Retorno en Pantalla
    return (
      <div>
        <Header course={course}/>
        <Content parts={parts}/>
        <Total parts={parts}/>
      </div>
    ) 
  
  }
  export default App