import React, { Component } from 'react';
import Highcharts from 'highcharts';
import {
  HighchartsChart, Chart, withHighcharts, XAxis, YAxis, Title, Legend, ColumnSeries, SplineSeries, PieSeries
} from 'react-jsx-highcharts';

class Charts extends Component {

  render() {
    const pieData = [{
      name: 'Loan',
      y: 13
    }, {
      name: 'Cheking',
      y: 23
    }, {
      name: 'Saving',
      y: 15
    },{
      name: 'Interest',
      y: 19
    }];

    return (
      <div className="app">
        <HighchartsChart>
          <Chart />

          <Title>Accounts Overview chart</Title>

          <Legend />

          <XAxis categories={['Jan-March', 'Apr-Jun', 'July-Sep', 'Oct-Dec']} />

          <YAxis>
            <ColumnSeries name="Loan" data={[3, 2, 1, 3, 4]} />
            <ColumnSeries name="Cheking" data={[2, 3, 5, 7, 6]} />
            <ColumnSeries name="Saving" data={[4, 3, 3, 9, 0]} />
            <ColumnSeries name="Interest" data={[2, 3, 7, 9,1]} />
            <SplineSeries name="Average" data={[3, 2.67, 3, 6.33, 3.33]} />
            <PieSeries name="Total consumption" data={pieData} center={[100, 80]} size={100} showInLegend={false} />
          </YAxis>
        </HighchartsChart>
      </div>
    );
  }
}

export default withHighcharts(Charts, Highcharts);