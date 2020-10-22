import React from 'react'

export default function MainContainer(){
    const element =(
                <div className = 'main-container'>
                    <section className = 'main-section'>

                        <article className='basic-article'>
                           <img src ='https://picsum.photos/300/200?grayscale'/> 
                        </article>

                        <article className='basic-article'>
                           <img src ='https://picsum.photos/300/200?grayscale'/> 
                        </article>

                        <article className='basic-article'>
                           <img src ='https://picsum.photos/300/200?grayscale'/> 
                        </article>

                        <article className='basic-article'>
                           <img src ='https://picsum.photos/300/200?grayscale'/> 
                        </article>
                        <article className='basic-article'>
                           <img src ='https://picsum.photos/300/200?grayscale'/> 
                        </article>
                    
                    </section>
                </div>
    );
    return element;
}