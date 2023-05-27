import { IMAGES_CARD, CATEGORIES } from '../../const'
import { CategoryCard } from './CategoryCard'

const [
  imgCiencia,
  imgDeportes,
  imgFilosofia,
  imgGeografia,
  imgHistoria,
  imgLiteratura,
  imgTecnologia
] = IMAGES_CARD

export const CategoryList = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-4 mt-10'>
      {/* Category Link Ciencia */}
      <CategoryCard
        category={CATEGORIES.ciencia}
        src={imgCiencia}
        alt={`Categoría ${CATEGORIES.ciencia}`}
        gradientColor=' from-purple-500 to-pink-500'
      />
      {/* Category Link Deportes */}
      <CategoryCard
        category={CATEGORIES.deportes}
        src={imgDeportes}
        alt={`Categoría ${CATEGORIES.deportes}`}
        gradientColor='from-lime-400 to-teal-700'
      />
      {/* Category Link Filosofia */}
      <CategoryCard
        category={CATEGORIES.filosofia}
        src={imgFilosofia}
        alt={`Categoría ${CATEGORIES.filosofia}`}
        gradientColor='from-red-400 to-zinc-400'
      />
      {/* Category Link Geografia */}
      <CategoryCard
        category={CATEGORIES.geografia}
        src={imgGeografia}
        alt={`Categoría ${CATEGORIES.geografia}`}
        gradientColor='from-cyan-200 to-lime-200'
      />
      {/* Category Link Historia */}
      <CategoryCard
        category={CATEGORIES.historia}
        src={imgHistoria}
        alt={`Categoría ${CATEGORIES.historia}`}
        gradientColor='from-sky-300 to-indigo-900'
      />
      {/* Category Link Literatura */}
      <CategoryCard
        category={CATEGORIES.literatura}
        src={imgLiteratura}
        alt={`Categoría ${CATEGORIES.literatura}`}
        gradientColor='from-amber-400 to-emerald-600'
      />
      {/* Category Link Tecnologia */}
      <CategoryCard
        category={CATEGORIES.tecnologia}
        src={imgTecnologia}
        alt={`Categoría ${CATEGORIES.tecnologia}`}
        gradientColor='from-violet-900 to-rose-500 '
      />
    </div>
  )
}
