

export function Heading(props){
  console.log(props)

  return(
    <>
      <h1 className="text-xl">{props.children}</h1>
    </>
  )
}