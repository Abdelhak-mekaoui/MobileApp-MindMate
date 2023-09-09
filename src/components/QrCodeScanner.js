// import React, { useState, useEffect } from 'react';
// import { Text, View, StyleSheet, Button } from 'react-native';
// import { BarCodeScanner } from 'expo-camera';

// export default function QRCodeScanner() {
//   const [scanned, setScanned] = useState(false);
//   const [data, setData] = useState(null);

//   const handleBarCodeScanned = ({ type, data }) => {
//     setScanned(true);
//     setData(data);
//   };

//   useEffect(() => {
//     if (scanned) {
//       alert(`Scanned QR code: ${data}`);
//     }
//   }, [scanned, data]);

//   return (
//     <View style={styles.container}>
//       <BarCodeScanner
//         onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
//         style={StyleSheet.absoluteFillObject}
//       />
//       {scanned && (
//         <Button title="Scan Again" onPress={() => setScanned(false)} />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

