import React from 'react';
import { Link } from 'react-router-dom'
import Head from './Head';
import '../hojas-de-estilo/Home.css'




function Home() {
  return (
    <>
      <Head/>
      <main className='main'>
        <h2 className='titulo'>La Calculadora</h2>
        <p className='parrafo'>Una calculadora es un dispositivo que se utiliza para realizar cálculos aritméticos. Aunque las calculadoras modernas se incorporan a menudo en un ordenador de propósito general, se diseñan para realizar ciertas operaciones para que sean más flexibles. Por ejemplo, existen calculadoras gráficas especializadas en campos matemáticos gráficos como la trigonometría y la estadística. También suelen ser más portátiles que la mayoría de los computadores, si bien algunas PDAs tienen tamaños similares a los modelos típicos de calculadora.

            En el pasado, se utilizaban como apoyo al trabajo numérico ábacos, comptómetros, ábacos neperianos, tablas matemáticas, reglas de cálculo y máquinas de sumar. El término «calculador» se usaba para aludir a la persona que ejercía este trabajo, ayudándose también de papel y lápiz. Este proceso de cálculo semimanual era tedioso y proclive a errores. Actualmente, las calculadoras son electrónicas y son fabricadas por numerosas empresas en tamaños y formas variados. Se pueden encontrar desde modelos muy baratos del tamaño de una tarjeta de crédito hasta otros más costosos con una impresora incorporada.

                  Una de las primeras calculadoras mecánicas es el mecanismo de Anticitera.</p><br></br>
              <h3 className='subtitulo'> Configuración básica </h3>
              <p className='parrafo'>    
                
                La complejidad de las calculadoras cambia según su finalidad. Una calculadora moderna consiste de las siguientes partes:

                Una fuente de energía, como una pila, un panel solar o ambos.
                Una pantalla, normalmente LED o LCD, capaz de mostrar cierto número de dígitos (habitualmente 8 o 10).
                La circuitería electrónica.
                Un teclado formado por:
                Los diez dígitos, del 0 al 9;
                El punto decimal;
                El signo igual o un botón con algo escrito (por ejemplo "EXE") (más común en calculadoras científicas), para obtener el resultado;
                Las cuatro operaciones aritméticas (suma, resta, multiplicación y división);
                Un botón «cancelar» para eliminar el cálculo en curso;
                Botones de encendido y apagado;
                Otras funciones básicas, como la raíz cuadrada y el porcentaje (%).
                Los modelos más avanzados pueden contar con memoria para un solo número, que puede recuperarse cuando se necesita. Los botones de control de estas son M+ (sumar a la memoria), M- (restar a la memoria) y MRC (Memory Recall, recupera la memoria). Habitualmente la pulsación de MRC durante 2 segundos elimina la memoria.
                Desde finales de los años 1980, las calculadoras simples han sido incorporadas a otros dispositivos de mano, como teléfonos móviles, buscapersonas y relojes de pulsera. Estos últimos fueron popularizados por el Dr. James Buccanon, presidente de la Universidad de Pensilvania.

                Los modelos más complejos, habitualmente llamados «científicos», permiten calcular funciones trigonométricas, estadísticas y de otros tipos. Las más avanzadas pueden mostrar gráficos e incorporan características de los sistemas algebraicos computacionales, siendo también programables para aplicaciones tales como resolver ecuaciones algebraicas, modelos financieros e incluso juegos. La mayoría de estas calculadoras puede mostrar números de hasta diez dígitos enteros o decimales completos en la pantalla. Se usa la notación científica para mostrar números por hasta un límite dispuesto por el diseñador del modelo, como 9,999999999 × 1099. Si se introduce un número mayor o una expresión matemática que lo arroje (como un factorial), entonces la calculadora puede limitarse a mostrar un «error». Porque solo puede mostrar 99 dígitos, o sea, una cifra de 10 000 hexadecallones.

                Hexadecallón es igual a un millón elevado a 16.
                Este mensaje de «error» también puede mostrarse si una función u operación no está matemáticamente definida, como es el caso de la división entre cero o las raíces enésimas pares de números negativos (la mayoría de las calculadoras científicas no permiten números complejos, si bien algunas cuentan con una función especial para trabajar con ellos). Algunas calculadoras pueden distinguir entre ambos tipos de error, lo que no siempre resulta evidente para el usuario.

                Solo unas pocas compañías desarrollan y construyen nuevos modelos profesionales de ingeniería y finanzas; las más conocidas son Casio, Sharp, Hewlett-Packard (HP) y Texas Instruments (TI). Tales calculadoras son buenos ejemplos de sistemas embebidos.</p>
      </main>
      
      {/* <body>
          <header className='header'>
              <nav className='nav'>
                <ul>
                    <li> IR A LA CALCULADORA</li>
                </ul>
              </nav>
          </header>
          <main className='main'>
              <Link href={'/Calculadora'}><a><h2>CALCULADORA</h2></a></Link>
              <p>Una calculadora es un dispositivo que se utiliza para realizar cálculos aritméticos. Aunque las calculadoras modernas se incorporan a menudo en un ordenador de propósito general, se diseñan para realizar ciertas operaciones para que sean más flexibles. Por ejemplo, existen calculadoras gráficas especializadas en campos matemáticos gráficos como la trigonometría y la estadística. También suelen ser más portátiles que la mayoría de los computadores, si bien algunas PDAs tienen tamaños similares a los modelos típicos de calculadora.

            En el pasado, se utilizaban como apoyo al trabajo numérico ábacos, comptómetros, ábacos neperianos, tablas matemáticas, reglas de cálculo y máquinas de sumar. El término «calculador» se usaba para aludir a la persona que ejercía este trabajo, ayudándose también de papel y lápiz. Este proceso de cálculo semimanual era tedioso y proclive a errores. Actualmente, las calculadoras son electrónicas y son fabricadas por numerosas empresas en tamaños y formas variados. Se pueden encontrar desde modelos muy baratos del tamaño de una tarjeta de crédito hasta otros más costosos con una impresora incorporada.

                  Una de las primeras calculadoras mecánicas es el mecanismo de Anticitera.</p><br></br>
              <h3> Configuración básica </h3>
              <p>    
                
                La complejidad de las calculadoras cambia según su finalidad. Una calculadora moderna consiste de las siguientes partes:

                Una fuente de energía, como una pila, un panel solar o ambos.
                Una pantalla, normalmente LED o LCD, capaz de mostrar cierto número de dígitos (habitualmente 8 o 10).
                La circuitería electrónica.
                Un teclado formado por:
                Los diez dígitos, del 0 al 9;
                El punto decimal;
                El signo igual o un botón con algo escrito (por ejemplo "EXE") (más común en calculadoras científicas), para obtener el resultado;
                Las cuatro operaciones aritméticas (suma, resta, multiplicación y división);
                Un botón «cancelar» para eliminar el cálculo en curso;
                Botones de encendido y apagado;
                Otras funciones básicas, como la raíz cuadrada y el porcentaje (%).
                Los modelos más avanzados pueden contar con memoria para un solo número, que puede recuperarse cuando se necesita. Los botones de control de estas son M+ (sumar a la memoria), M- (restar a la memoria) y MRC (Memory Recall, recupera la memoria). Habitualmente la pulsación de MRC durante 2 segundos elimina la memoria.
                Desde finales de los años 1980, las calculadoras simples han sido incorporadas a otros dispositivos de mano, como teléfonos móviles, buscapersonas y relojes de pulsera. Estos últimos fueron popularizados por el Dr. James Buccanon, presidente de la Universidad de Pensilvania.

                Los modelos más complejos, habitualmente llamados «científicos», permiten calcular funciones trigonométricas, estadísticas y de otros tipos. Las más avanzadas pueden mostrar gráficos e incorporan características de los sistemas algebraicos computacionales, siendo también programables para aplicaciones tales como resolver ecuaciones algebraicas, modelos financieros e incluso juegos. La mayoría de estas calculadoras puede mostrar números de hasta diez dígitos enteros o decimales completos en la pantalla. Se usa la notación científica para mostrar números por hasta un límite dispuesto por el diseñador del modelo, como 9,999999999 × 1099. Si se introduce un número mayor o una expresión matemática que lo arroje (como un factorial), entonces la calculadora puede limitarse a mostrar un «error». Porque solo puede mostrar 99 dígitos, o sea, una cifra de 10 000 hexadecallones.

                Hexadecallón es igual a un millón elevado a 16.
                Este mensaje de «error» también puede mostrarse si una función u operación no está matemáticamente definida, como es el caso de la división entre cero o las raíces enésimas pares de números negativos (la mayoría de las calculadoras científicas no permiten números complejos, si bien algunas cuentan con una función especial para trabajar con ellos). Algunas calculadoras pueden distinguir entre ambos tipos de error, lo que no siempre resulta evidente para el usuario.

                Solo unas pocas compañías desarrollan y construyen nuevos modelos profesionales de ingeniería y finanzas; las más conocidas son Casio, Sharp, Hewlett-Packard (HP) y Texas Instruments (TI). Tales calculadoras son buenos ejemplos de sistemas embebidos.
 </p>
          </main>
          <footer className='footer'></footer>
      </body> */}
      </>
          
  )
}

export default Home
