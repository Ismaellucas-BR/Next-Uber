import React from 'react';

function FooterMenu(props) {
  return (
    <div className='flex flex-col w-full gap-3 lg:w-1/4'>
      <h2 className='font-txt-bold text-lg text-white'>{props.title}</h2>
      <a href={props.linkUm}><span className='font-txt-regular text-sm text-white hover:text-gray-300'>{props.itemUm}</span></a>
      <a href={props.linkDois}><span className='font-txt-regular text-sm text-white hover:text-gray-300'>{props.itemDois}</span></a>
      {!props.showlink3 &&(<a href={props.linkTres}><span className='font-txt-regular text-sm text-white hover:text-gray-300'>{props.itemTres}</span></a>)} 
      {!props.showlink4 &&(<a href={props.linkQuatro}><span className='font-txt-regular text-sm text-white hover:text-gray-300'>{props.itemQuatro}</span></a>)}
      {!props.showlink5 &&(<a href={props.linkCinco}><span className='font-txt-regular text-sm text-white hover:text-gray-300'>{props.itemCinco}</span></a>)}
      {!props.showlink6 &&(<a href={props.linkSeis}><span className='font-txt-regular text-sm text-white hover:text-gray-300'>{props.itemSeis}</span></a>)}
      {!props.showlink7 && (<a href={props.linkSete}><span className='font-txt-regular text-sm text-white hover:text-gray-300'>{props.itemSete}</span></a>)}  
      {!props.showlink8 && (<a href={props.linkOito}><span className='font-txt-regular text-sm text-white hover:text-gray-300'>{props.itemOito}</span></a>)}
    </div>
  );
}

export default FooterMenu;