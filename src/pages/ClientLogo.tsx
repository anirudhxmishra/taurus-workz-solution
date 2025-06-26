import React from 'react';

const clients = [
  // Existing
  {
    name: 'Bank of America',
    logo: 'https://www2.bac-assets.com/homepage/spa-assets/images/assets-images-global-logos-bac-logo-v2-CSX3648cbbb.svg',
    fallback: 'https://logos-world.net/wp-content/uploads/2021/04/Bank-of-America-Logo.png',
  },
  {
    name: 'Volkswagen',
    logo: 'https://unavatar.io/twitter/volkswagen',
    fallback: 'https://logos-world.net/wp-content/uploads/2021/04/Volkswagen-Logo.png',
  },
  {
    name: 'Tech Mahindra',
    logo: 'https://www.techmahindra.com/themes/custom/techm/techm_logo.svg',
    fallback: 'https://logos-world.net/wp-content/uploads/2022/04/Tech-Mahindra-Logo.png',
  },
  {
    name: 'Reliance Communications',
    logo: 'https://www.newsonprojects.com/uploads/news/083737.jpg',
    fallback: 'https://logos-world.net/wp-content/uploads/2022/12/Reliance-Communications-Logo.png',
  },
  {
    name: 'Idea',
    logo: 'https://cdn.worldvectorlogo.com/logos/idea-cellular-1.svg',
    fallback: 'https://logos-world.net/wp-content/uploads/2021/02/Idea-Cellular-Logo.png',
  },
  {
    name: 'Sutherland',
    logo: 'https://www.sutherlandglobal.com/wp-content/uploads/sites/2/2023/08/sutherland-logo-colour.png',
    fallback: 'https://companieslogo.com/img/orig/SGLB-be8cafca.png',
  },
  {
    name: 'Capita',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/95/Capita_logo_%282019%29.svg/2560px-Capita_logo_%282019%29.svg.png',
    fallback: 'https://logos-world.net/wp-content/uploads/2022/12/Capita-Logo.png',
  },
  {
    name: 'Teleperformance',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Teleperformance.png',
    fallback: 'https://logos-world.net/wp-content/uploads/2022/12/Teleperformance-Logo.png',
  },
  {
    name: 'Bharat Matrimony',
    logo: 'https://unavatar.io/twitter/bharatmatrimony',
    fallback: 'https://companieslogo.com/img/orig/BMATRIMONY.NS-7c4f2b92.png',
  },
  {
    name: 'Sanofi',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRRG64WQgWZ2RNoRzMdCpLbpV2qDoFyN4T5g&s',
    fallback: 'https://logos-world.net/wp-content/uploads/2021/02/Sanofi-Logo.png',
  },
  {
    name: 'Firstsource',
    logo: 'https://www.firstsource.com/themes/custom/first_source/images/Firstsource-logo.svg',
    fallback: 'https://companieslogo.com/img/orig/FSOL.NS-59c9ac5e.png',
  },
  {
    name: 'Neo Sports',
    logo: 'https://upload.wikimedia.org/wikipedia/en/d/dc/Neosportsnew.jpg',
    fallback: 'https://logos-world.net/wp-content/uploads/2022/12/Neo-Sports-Logo.png',
  },
  {
    name: 'TV Today Network',
    logo: 'https://trendlyne-media-mumbai-new.s3.amazonaws.com/profilepicture/1432_profilepicture.png',
    fallback: 'https://companieslogo.com/img/orig/TVTODAY.NS-6bb1a0cb.png',
  },
  {
    name: 'Frameworkz',
    logo: 'https://static.wixstatic.com/media/407904_fc7acb280fc7427ba83f7c52087ac840f000.jpg/v1/fill/w_744,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/407904_fc7acb280fc7427ba83f7c52087ac840f000.jpg',
    fallback: 'https://media.licdn.com/dms/image/C4D0BAQGxVZ0QZ0QZ0Q/company-logo_200_200/0/1630572800000?e=2147483647&v=beta&t=abc123',
  },

  // New (Remaining Clients)
  {
    name: 'Three',
    logo: 'https://cdn.worldvectorlogo.com/logos/3-converted-1.svg',
    fallback: 'https://logos-world.net/wp-content/uploads/2021/02/Three-Logo.png',
  },
  {
    name: 'Magma Fincorp',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF6HBK5uwBH6gG10GcWbbCAOxhMOxDQQmm6g&s',
    fallback: 'https://companieslogo.com/img/orig/MAGMA.NS-e1f6e8b5.png',
  },
  {
    name: 'Oberoi Realty',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgyCK15wdfzVv2_SdnaoylLDgfFG6QxNzUiQ&s',
    fallback: 'https://companieslogo.com/img/orig/OBEROIRLTY.NS-c4b9f8d4.png',
  },
  {
    name: 'Alchemy Capital',
    logo: 'https://www.alchemyim.com/images/ALCHEMY-LOGO.webp',
    fallback: 'https://www.alchemycapital.com/wp-content/uploads/2020/08/alchemy-capital-logo.png',
  },
  {
    name: 'Bry-Air',
    logo: 'https://www.bryair.com/wp-content/uploads/2023/02/logo-group-img2.webp',
    fallback: 'https://www.bryair.com/wp-content/uploads/2021/05/bryair-logo.png',
  },
//   {
//     name: 'Metro Rail',
//     logo: '',
//     fallback: 'https://logos-world.net/wp-content/uploads/2022/12/Delhi-Metro-Logo.png',
//   },
  {
    name: 'Keppel Offshore & Marine',
    logo: 'https://www.keppel.com/theme/default/images/Keppel-Logo.svg',
    fallback: 'https://logos-world.net/wp-content/uploads/2022/12/Keppel-Logo.png',
  },
  {
    name: 'Caryaire',
    logo: 'https://caryaire.com/wp-content/uploads/caryaire-logo.png',
    fallback: 'https://media.licdn.com/dms/image/C4D0BAQHxKZ0QZ0QZ0Q/company-logo_200_200/0/1630572800000?e=2147483647&v=beta&t=xyz789',
  },
  {
    name: 'Ventura Securities',
    logo: 'https://ventura1.com/images/logo.jpg',
    fallback: 'https://companieslogo.com/img/orig/VENTURA-IN-5c7a2b8e.png',
  },
  {
    name: 'Quinnox',
    logo: 'https://www.quinnox.com/wp-content/uploads/2022/08/Quinnox-Logo.svg',
    fallback: 'https://logos-world.net/wp-content/uploads/2022/12/Quinnox-Logo.png',
  },
  {
    name: 'BSV',
    logo: 'https://bsvgroup.com/wp-content/uploads/2024/05/bsvlogo-1.webp',
    fallback: 'https://media.licdn.com/dms/image/C4D0BAQGxVZ0QZ0QZ0Q/company-logo_200_200/0/1630572800000?e=2147483647&v=beta&t=bsv123',
  },
  {
    name: 'Glenmark',
    logo: 'https://glenmark.b-cdn.net/wp-content/uploads/2021/11/glenmark-logo.jpg',
    fallback: 'https://logos-world.net/wp-content/uploads/2022/04/Glenmark-Logo.png',
  },
];

const ClientLogo: React.FC = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 items-center justify-center">
      {clients.map((client, index) => (
        <div
          key={index}
          className="bg-white p-4 shadow-sm rounded-lg border border-gray-100 hover:shadow-md transition-shadow duration-200"
        >
          <img
            src={client.logo || client.fallback}
            alt={`${client.name} logo`}
            title={client.name}
            className="h-16 w-full object-contain mx-auto"
            onError={(e) => {
              const fallback = client.fallback || `https://via.placeholder.com/150x60/f3f4f6/6b7280?text=${encodeURIComponent(client.name)}`;
              e.currentTarget.src = fallback;
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default ClientLogo;