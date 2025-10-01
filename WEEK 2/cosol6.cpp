#include <iostream>
using namespace std;
 int cariMAX(int arr[], int ukuran){
    int max=arr[0];
    for (int i=1; i<ukuran; i++){
        if (arr[i]>max){
            max=arr[i];
        }
    }
    return max;
 }
 void operasiaritmatika(int arr[],int ukuran){
    int totaljumlah=0;
    for (int i=0; i<ukuran; i++){
        totaljumlah+=arr[i];
    }
    cout <<"total penjumlahan: "<<totaljumlah<<endl;
    int totalkali=1;
    for (int i=0; i<ukuran; i++){
        totalkali*=arr[i];
    }
    cout <<"total perkalian: "<<totalkali<<endl;
 }
 int main(){
    const int ukuran =5;
    int arr[ukuran];
    for (int i=0; i<ukuran; i++){
        cout <<"Masukkan elemen ke-"<<i+1<<": ";
        cin >> arr[i];
    }
    cout<<endl;
    cout<<"nilai terbesar dari array: "<<cariMAX(arr,ukuran)<<endl;
    operasiaritmatika(arr,ukuran);
    return 0;
}