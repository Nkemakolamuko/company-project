import React from 'react'
import Title from './Title'
import CompanyInfoSection from './company-info/CompanyInfoSection'

const CompanyInfo = () => {
  return (
    <div className='bg-[#F2F5F6] flex flex-col w-full px-4 md:px-16 py-4 md:py-16'>
        <Title text1={'COMPANY'} text2={'INFO'} />
        <CompanyInfoSection />
    </div>
  )
}

export default CompanyInfo