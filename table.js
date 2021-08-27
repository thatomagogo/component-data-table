import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { DataTable } from 'react-native-paper';

const optionsPerPage = [2, 3, 4];

export default function Table({ data, navigation }) {

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

            <TouchableOpacity onPress={() => navigation.navigate('Details', {
              'reading': item.meterReadings })}>

              <DataTable.Row>
                  <DataTable.Cell>{item.name}</DataTable.Cell>
                  <DataTable.Cell>{item.occupation}</DataTable.Cell>
                  <DataTable.Cell>{item.contact}</DataTable.Cell>
              </DataTable.Row>
              
            </TouchableOpacity>
        
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
