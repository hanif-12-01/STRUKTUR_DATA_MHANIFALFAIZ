#include <iostream>
using namespace std;
void mesin(){
    float a,b;
    cout<<"Masukkan angka pertama: ";
    cin>>a;
    cout<<"Masukkan angka kedua: ";
    cin>>b;

    //penjumlahan
    cout<<"penjumlahan: "<<a+b<<endl;
    //pengurangan
    cout<<"pengurangan: "<<a-b<<endl;
    //perkalian
    cout<<"perkalian: "<<a*b<<endl;
    //pembagian
    if (b!=0){
        cout<<"pembagian: "<<a/b<<endl;
    } else {
        cout<<"pembagian: tidak terdefinisi (pembagi nol)"<<endl;
    }
}
int main(){
    mesin();
    return 0;
}
