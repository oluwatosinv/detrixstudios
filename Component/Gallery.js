import { MDBContainer } from 'mdbreact'
import Link from 'next/link'
import Image from 'next/image'

const Gallery = () => {
  const GalleryImgs = [
    {
      name: 1,
      to: '/BridalBloom',
      text: 'Bridal Bloom',
      nickName: 'wedding',
      imgUrl:
        'https://res.cloudinary.com/tosin/image/upload/dpr_auto,f_auto,w_auto,q_auto/v1621792591/detrix/P1120768.jpg',
    },
    {
      name: 2,
      to: '/Wemimo',
      text: 'Wemimo and Ayotunde',
      nickName: 'wedding videography',
      imgUrl:
        'https://res.cloudinary.com/tosin/image/upload/dpr_auto,f_auto,w_auto,q_auto/v1622237194/detrix/WEMIMO.jpg',
    },
    {
      name: 3,
      to: '/Lolade',
      text: 'Lolade And Lanre',
      nickName: 'wedding Photography',
      imgUrl:
        'https://res.cloudinary.com/tosin/image/upload/dpr_auto,f_auto,w_auto,q_auto/v1621983199/detrix/lolade%20and%20lanre/P1120768a.jpg',
    },
    {
      name: 4,
      to: '/Lanre',
      text: 'Lanre and Henry',
      nickName: 'wedding Videography',
      imgUrl:
        'https://res.cloudinary.com/tosin/image/upload/dpr_auto,f_auto,w_auto,q_auto/v1622235742/detrix/LANRE_1.jpg',
    },
    {
      name: 5,
      to: '/Chichi-wedding-photography-lagos',
      text: 'Chichi and Davonche',
      nickName: 'Wedding Photography',
      imgUrl:
        'https://res.cloudinary.com/tosin/image/upload/dpr_auto,f_auto,w_auto,q_auto/v1621892685/detrix/P1190394_1.jpg',
    },
    {
      name: 6,
      to: '/TeeChi',
      text: 'TeeChi 2020',
      nickName: 'photography',
      imgUrl:
        'https://res.cloudinary.com/tosin/image/upload/dpr_auto,f_auto,q_auto,w_auto/v1622925745/detrix/P1120798_2_1.jpg',
    },
  ]
  return (
    <MDBContainer>
      <h1 className='ImgGridTittle'>Wedding Gallery</h1>
      <div className='imageGrid'>
        {GalleryImgs.map((GalleryImg, index) => (
          <Link href={GalleryImg.to} key={GalleryImg.to} passHref>
            <div>
              <Image
                className='gridImg'
                src={GalleryImg.imgUrl}
                alt={`${GalleryImg.name}`}
                width={900}
                height={650}
              />
              <h3 className='gridText'>{GalleryImg.text}</h3>
            </div>
          </Link>
        ))}
      </div>
    </MDBContainer>
  )
}

export default Gallery
