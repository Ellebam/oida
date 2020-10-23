import React from 'react'
import ProductRangeArticle from './ProductRangeArticles'

export default function MainContainer(){
    const element =(
                <div className = 'main-container product-range'>
                    <section className = 'main-section'>

                     <ProductRangeArticle/>
                     <ProductRangeArticle/>
                     <ProductRangeArticle/>
                     <ProductRangeArticle/>
                     <ProductRangeArticle/>
                    
                    </section>
                    
                </div>
    );
    
    return element;
}


function alingIMGInArticle(){
   var article = document.getElementsByClassName('basic-article')[0];
   var articleImages = article.getElementsByTagName('img');

   for ( var i = 0; i<articleImages.length; i= i+2){
      articleImages[i].classList.add('even');
   }
}