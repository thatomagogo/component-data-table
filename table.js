import React from 'react';
import { StyleSheet, View } from 'react-native';
import { DataTable } from 'react-native-paper';

const optionsPerPage = [2, 3, 4];

export default function Table({ data }) {

  const [page, setPage] = React.useState(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <View style={styles.view}>
      <DataTable>

        <DataTable.Header>
          <DataTable.Title>Name</DataTable.Title>
          <DataTable.Title>Title</DataTable.Title>
          <DataTable.Title>Contact</DataTable.Title>
        </DataTable.Header>

        { data.map(item => (
            <DataTable.Row>
                <DataTable.Cell>{item.name}</DataTable.Cell>
                <DataTable.Cell>{item.occupation}</DataTable.Cell>
                <DataTable.Cell>{item.contact}</DataTable.Cell>
            </DataTable.Row>
        )) }

      </DataTable>
      
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    marginTop: 20
  }
});