import { useState, useEffect } from 'react';
import Link from 'next/link';
import '../app/globals.css';

const fetchCountries = async () => {
  try {
    const res = await fetch('https://bizarexpedition.in/travel-api/country');
    const data = await res.json();
    return data.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export default function Page() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedCountries = await fetchCountries();
      setCountries(fetchedCountries);
    };

    fetchData();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Homepage!</h1>

      {[
        { href: 'account/login', label: 'Login' },
        { href: 'account/signup', label: 'Signup' },
        { href: 'packages/promopage/promo', label: 'Package List page' },
        { href: 'packages/details/indexCopy', label: 'Package Detail page' },
      ].map((link, index) => (
        <div key={index} className="mb-2">
          <Link href={link.href} className="text-blue-500 hover:underline">
            {link.label}
          </Link>
        </div>
      ))}

      <hr />

      {countries.map((country) => (
        <div key={country.id} className="mb-2">
          <Link href={'world/' + country.name}>
            {country.name}
          </Link>
        </div>
      ))}

    </div>
  );
}
