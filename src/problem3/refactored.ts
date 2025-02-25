import {WalletBalance, FormattedWalletBalance, Props} from "./types.ts";
import axios from "axios";
  
class Datasource {
    link: string;

    constructor(link: string) {
        this.link = link;
    }

    get getPrices(): Promise<AxiosResponse<any, any>> {
        return axios.get(this.link);
    }
}

const getPriority = (blockchain: string): number => {
    switch (blockchain) {
        case 'Osmosis':
            return 100
        case 'Ethereum':
            return 50
        case 'Arbitrum':
            return 30
        case 'Zilliqa':
            return 20
        case 'Neo':
            return 20
        default:
            return -99
    }
}

const filterBalance = (balance: WalletBalance): boolean => {
    const balancePriority = getPriority(balance.blockchain);
    if (balancePriority > -99 && balance.amount <= 0) {
        return true;
    }
    return false
}

const balanceCompareFunction = (lhs: WalletBalance, rhs: WalletBalance): number => {
    const leftPriority = getPriority(lhs.blockchain);
    const rightPriority = getPriority(rhs.blockchain);
    if (leftPriority > rightPriority) {
      return -1;
    } else if (rightPriority > leftPriority) {
      return 1;
    }
    return 0;
}

const WalletPage: React.FC<Props> = (props: Props) => {
    const { children, ...rest } = props;
    const balances = useWalletBalances();
    const [prices, setPrices] = useState<Record<string, number>>({});
  
    useEffect(() => {
        const datasource = new Datasource("https://interview.switcheo.com/prices.json");
        datasource.getPrices.then((prices) => {
            setPrices((prev) => {
                for (let i = 0; i < data.length; i += 1) {
                    prev[prices[i]["currency"]] = prices[i]["price"]
                }
                return prev;
              })
        }).catch(error => {
            console.err(error);
        });
    }, []);
  
    const sortedBalances = useMemo(() => {
        return balances.filter((balance: WalletBalance) => {
            return filterBalance(balance);
        }).sort((lhs: WalletBalance, rhs: WalletBalance) => {
            return balanceCompareFunction(lhs, rhs);
        });
    }, [balances, prices]);
  
    const formattedBalances = sortedBalances.map((balance: WalletBalance) => {
        return {
            ...balance,
            formatted: balance.amount.toFixed()
        }
    })
  
    const rows = formattedBalances.map((balance: FormattedWalletBalance, index: number) => {
        const usdValue = prices[balance.currency] * balance.amount;
        return (
        <WalletRow 
            className={classes.row}
            key={index}
            amount={balance.amount}
            usdValue={usdValue}
            formattedAmount={balance.formatted}
        />
        )
    })
  
    return (
        <div {...rest}>
            {rows}
        </div>
    )
  }