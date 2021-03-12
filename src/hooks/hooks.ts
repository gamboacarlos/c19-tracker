export function textTransform(countryName: string) {
  const firstToUpperCase =
    countryName.charAt(0).toUpperCase() + countryName.slice(1);
  switch (firstToUpperCase) {
    case 'España':
      return 'Spain';
    case 'Alemania':
      return 'Germany';
    case 'Suecia':
      return 'Sweden';
    case 'Estados unidos':
      return 'US';
    case 'Usa':
      return 'US';
    case 'United states':
      return 'US';
    case 'United States':
      return 'US';
    case 'USA':
      return 'US';
    case 'Afganistan':
      return 'Afghanistan';
    case 'Croacia':
      return 'Croatia';
    case 'Guinea ecuatorial':
      return 'Equatorial Guinea';
    case 'Grecia':
      return 'Greece';
    case 'hungria':
      return 'Hungary';
    case 'Irlanda':
      return 'Ireland';
    case 'Italia':
      return 'Italy';
    case 'Japon':
      return 'Japan';
    case 'Korea':
      return 'Korea, South';
    case 'Korea del sur':
      return 'Korea, South';
    case 'Holanda':
      return 'Netherlands';
    case 'Nueva zelanda':
      return 'New Zealand';
    case 'New zealand':
      return 'New Zealand';
    case 'Noruega':
      return 'Norway';
    case 'Filipinas':
      return 'Philippines';
    case 'Polonia':
      return 'Poland';
    case 'Rumania':
      return 'Romania';
    case 'Rusia':
      return 'Russia';
    case 'Singapur':
      return 'Singapore';
    case 'Sudafrica':
      return 'South Africa';
    case 'Suiza':
      return 'Switzerland';
    case 'Tailandia':
      return 'Thailand';
    case 'Tunez':
      return 'Tunisia';
    case 'Turquia':
      return 'Turkey';
    case 'Ucrania':
      return 'Ukraine';
    case 'Emiratos arabes':
      return 'United Arab Emirates';
    case 'Emiratos arabes unidos':
      return 'United Arab Emirates';
    case 'United emirates':
      return 'United Arab Emirates';
    case 'Inglaterra':
      return 'United Kingdom';
    case 'Uk':
      return 'United Kingdom';
    case 'UK':
      return 'United Kingdom';
    case 'England':
      return 'United Kingdom';

    default:
      return firstToUpperCase;
  }
}
