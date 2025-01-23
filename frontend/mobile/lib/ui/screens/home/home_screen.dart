import 'package:flutter/material.dart';

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: 3,
      child: Scaffold(
        appBar: AppBar(
          title: Text('Home Screen'),
          bottom: TabBar(
            tabs: [
              Tab(icon: Icon(Icons.directions_car), text: 'Car'),
              Tab(icon: Icon(Icons.directions_transit), text: 'Transit'),
              Tab(icon: Icon(Icons.directions_bike), text: 'Bike'),
            ],
          ),
        ),
        body: TabBarView(
          children: [
            Center(child: Text('Car Tab')),
            Center(child: Text('Transit Tab')),
            Center(child: Text('Bike Tab')),
          ],
        ),
      ),
    );
  }
}
