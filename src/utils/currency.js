/**
 * Utilidad de formato de moneda para Antojo Casero
 * Moneda: Guaraní paraguayo (Gs.)
 *
 * Uso:
 *   import { formatGuarani } from '../utils/currency';
 *   formatGuarani(8000)  => "Gs. 8.000"
 *   formatGuarani(25000) => "Gs. 25.000"
 */

export const formatGuarani = (value) => {
  const amount = Number(value);

  if (!Number.isFinite(amount)) {
    return 'Gs. 0';
  }

  return `Gs. ${amount.toLocaleString('es-PY')}`;
};

export default formatGuarani;
