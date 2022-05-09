import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../../index';
import { IconGamepad } from '../../../assets';

type TBreadcrumb = {
  text: string;
  path: string;
};

type TProps = {
  title: string;
  breadcrumbs: TBreadcrumb[];
};

const Header = ({ title, breadcrumbs }: TProps) => {
  return (
    <div className="px-2 md:px-0 container mx-auto mt-4">
      <div className="bg-light rounded-lg p-4 flex justify-between items-center">
        <div>
          <h1 className="text-2xl md:text-4xl text-secondary font-macondo filter">
            {title.toUpperCase()}
          </h1>
          <div>
            {breadcrumbs.map((bc, index, arr) => (
              <Link key={index} to={bc.path} className="text-sm text-gray">
                {bc.text} {index !== arr.length - 1 && ' / '}
              </Link>
            ))}
          </div>
        </div>
        <Icon path={IconGamepad} size="60" />
      </div>
    </div>
  );
};

export default Header;
