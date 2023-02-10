import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Gaf.module.scss';

interface GafProps {
 className?: string;
}

export const Gaf = ({className}: GafProps) => {

    return (
        <div className={classNames(cls.gaf, {}, [className])}>
            
        </div>
 );
}