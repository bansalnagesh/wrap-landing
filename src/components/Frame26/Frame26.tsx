import { memo, useEffect, useState } from 'react';
import { FC } from 'react';

import resets from '../_resets.module.css';
import { Ellipse9Icon } from './Ellipse9Icon';
import { Ellipse9Icon2 } from './Ellipse9Icon2';
import { Ellipse9Icon3 } from './Ellipse9Icon3';
import { Ellipse9Icon4 } from './Ellipse9Icon4';
import classes from './Frame26.module.css';
import { Group18Icon } from './Group18Icon';
import { useAccount } from 'wagmi';
interface Props {
  className?: string;
}
/* @figmaId 106:5086 */
export const Frame26: FC<Props> = memo(function Frame26(props = {}) {
  const { address } = useAccount();
  const [data, setData] = useState();

  const transaction = data?.total_transactions;
  const profit_loss = data?.pnl;
  const rugpull = data?.rugpulls;
  const rugpull_chances = data?.rugpull_changes;
  const gas_total = data?.total_gas_fees;
  const gas_highest = data?.highest_gas;
  const portfolio = data?.portfolio;

  const fetchDataFromAPI = async () => {
    try {
      console.log('');
      const response = await fetch('https://api.onbreeze.app/dunes/wallet', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          wallet: address,
        }),
      });
      const res = await response.json();
      console.log({ res });
      setData(res);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!!address) {
      fetchDataFromAPI();
    }
  }, []);

  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle}></div>
      <div className={classes.frame26}>
        <div className={classes._2022CryptoYearInReview}>
          2022 Crypto Year in Review
        </div>
        <div className={classes.myPortfolioIsDownBy98}>
          <div className={classes.textBlock}>My Portfolio is down </div>
          <div className={classes.textBlock2}>
            <p className={classes.labelWrapper}>
              <span className={classes.label}>by </span>
              <span className={classes.label2}>{portfolio}%↓</span>
            </p>
          </div>
        </div>
      </div>
      <div className={classes.frame33}>
        <div className={classes.group13}>
          <div className={classes.rectangle3}></div>
          <div className={classes.frame29}>
            <div className={classes.group11}>
              <div className={classes.ellipse9}>
                <Ellipse9Icon className={classes.icon} />
              </div>
              <div className={classes.unnamed}>😐</div>
            </div>
            <div className={classes.frame27}>
              <div className={classes._72}>{rugpull}</div>
              <div className={classes.noOfRugpulls}>No.of Rugpulls</div>
            </div>
          </div>
        </div>
        <div className={classes._90ChanceOfGettingRugpulledAgai}>
          <p className={classes.labelWrapper2}>
            <span className={classes.label3}>{rugpull_chances}%</span>
            <span className={classes.label4}>
              {' '}
              chance of getting rugpulled again.
            </span>
          </p>
        </div>
      </div>
      <div className={classes.frame34}>
        <div className={classes.group15}>
          <div className={classes.rectangle5}></div>
          <div className={classes.frame31}>
            <div className={classes.group112}>
              <div className={classes.ellipse92}>
                <Ellipse9Icon2 className={classes.icon2} />
              </div>
              <div className={classes.unnamed2}>⛽️</div>
            </div>
            <div className={classes.frame272}>
              <div className={classes._100}>${gas_total}</div>
              <div className={classes.totalGasPaid}>Total Gas Paid</div>
            </div>
          </div>
        </div>
        <div className={classes.highestBeing500}>
          Highest being {gas_highest}$
        </div>
      </div>
      <div className={classes.frame36}>
        <div className={classes.group17}>
          <div className={classes.rectangle2}></div>
          <div className={classes.frame28}>
            <div className={classes.group113}>
              <div className={classes.ellipse93}>
                <Ellipse9Icon3 className={classes.icon3} />
              </div>
              <div className={classes.unnamed3}>🥲</div>
            </div>
            <div className={classes.frame273}>
              <div className={classes._400}>{profit_loss}$</div>
              <div className={classes.pL}>P/L</div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.frame35}>
        <div className={classes.group16}>
          <div className={classes.rectangle52}></div>
          <div className={classes.frame312}>
            <div className={classes.group114}>
              <div className={classes.ellipse94}>
                <Ellipse9Icon4 className={classes.icon4} />
              </div>
              <div className={classes.unnamed4}>⛽️</div>
            </div>
            <div className={classes.frame274}>
              <div className={classes._105}>{transaction}</div>
              <div className={classes.transactions}>Transactions</div>
            </div>
          </div>
        </div>
        <div className={classes.onEthereum}>On Ethereum</div>
      </div>
      <div className={classes.group18}>
        <Group18Icon className={classes.icon5} />
      </div>
      <div className={classes.frame37}>
        <div className={classes.cryptoWrapped}>DegenWrap</div>
        <div className={classes.line1}></div>
      </div>
    </div>
  );
});
