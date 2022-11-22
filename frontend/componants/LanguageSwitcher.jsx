import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import style from '../style/LanguageSwitcher.module.scss'

export default function LanguageSwitcher({ absolute }) {
  const router=useRouter();
  const { pathname, asPath, query , locale, locales} = router;
  const [currentLocale, setCurrentLocale] = useState(locale);
  useEffect(()=>setCurrentLocale(locale), [locale]);
  return (
    <div className={style.wrapper+(absolute?" "+style["wrapper--absolute"]:"")}>
      <Select className={style.menu} value={currentLocale} onChange={e=>setCurrentLocale(e.target.value)}>
      {
        router.locales.map(locale=>(
          <MenuItem key={locale} className={style.menu__item} value={locale}>
            <Link href={{ pathname, query }} as={ asPath } locale={locale}>
              <img className={style.menu__image} alt={locale+" flag"} src={"/images/flags/"+locale.substring(3).toLowerCase()+".png"} />
            </Link>
          </MenuItem>
        ))
      }
      </Select>
    </div>
  );
}
