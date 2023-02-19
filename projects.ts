export type Project = {
  id: number
  name: string
  area: string
  link: string
  image: string
  imageAlt: string
  color?: string
}

export const projects: Project[] = [
  {
    id: 0,
    name: 'Glow Skin Care',
    area: 'UX/UI Case Study',
    image: 'https://i.ibb.co/mD0GsbX/skin.jpg',
    imageAlt: 'Glow Skin Care',
    link: 'https://www.behance.net/gallery/162590201/Glow-UXUI-Case-Study',
  },
  {
    id: 1,
    name: 'Sierranort Store',
    area: 'Wireframing Design',
    image: 'https://i.ibb.co/TKfhKTP/sierr.jpg',
    imageAlt: 'Sierranort Store',
    link: 'https://www.behance.net/gallery/163336165/Sierranort',
    color: '#1D1D26',
  },
  {
    id: 2,
    name: 'HBO Max Redesign (in process...)',
    area: 'Design & Research',
    image:
      'https://media.a24.com/p/84633a9c1d8ef652962c2fc24920f722/adjuntos/296/imagenes/008/781/0008781720/1200x675/smart/hbo-maxjpg.jpg',
    imageAlt: 'hbo max',
    link: '',
    color: '#E3E3E3',
  },
]
