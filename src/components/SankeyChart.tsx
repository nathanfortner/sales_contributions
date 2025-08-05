import React from 'react';
import { ResponsiveContainer, Sankey, Tooltip, Cell } from 'recharts';

interface SalesData {
  [key: string]: number;
}

interface SankeyData {
  nodes: Array<{ name: string }>;
  links: Array<{ source: number; target: number; value: number }>;
}

interface SankeyChartProps {
  data: SalesData;
}

const SankeyChart: React.FC<SankeyChartProps> = ({ data }) => {
  // Transform the data for Sankey chart
  const transformData = (salesData: SalesData): SankeyData => {
    const nodes = Object.keys(salesData).map(name => ({ name }));
    
    // Create a simple flow from "Total Sales" to each category
    const links = Object.entries(salesData).map(([category, value], index) => ({
      source: 0, // "Total Sales" node
      target: index + 1, // Each category node
      value: Math.abs(value) // Use absolute value for visualization
    }));

    // Add "Total Sales" as the first node
    nodes.unshift({ name: "Total Sales" });

    return { nodes, links };
  };

  const chartData = transformData(data);

  // Color palette for different categories
  const colors = [
    '#8884d8', '#82ca9d', '#ffc658', '#ff7300', 
    '#ff0000', '#00ff00', '#0000ff', '#ffff00'
  ];

  return (
    <div style={{ width: '100%', height: '500px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <Sankey
          data={chartData}
          nodePadding={50}
          margin={{ left: 20, right: 20, top: 20, bottom: 20 }}
        >
          <Tooltip 
            formatter={(value: number, name: string) => [
              `$${value.toLocaleString()}`, 
              name
            ]}
          />
          {chartData.nodes.map((node, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Sankey>
      </ResponsiveContainer>
    </div>
  );
};

export default SankeyChart; 