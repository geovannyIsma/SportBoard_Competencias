import 'package:flutter/material.dart';
import '../../core/constants/app_colors.dart';

class CustomDrawer extends StatelessWidget {
  const CustomDrawer({super.key});

  @override
  Widget build(BuildContext context) {
    return Drawer(
      child: ListView(
        padding: EdgeInsets.zero,
        children: <Widget>[
          DrawerHeader(
            decoration: BoxDecoration(
              color: AppColors.primaryColor,
            ),
            child: const Text(
              'Drawer Header',
              style: TextStyle(
                color: AppColors.onPrimaryColor,
              ),
            ),
          ),
          const ListTile(
            title: Text('Item 1'),
          ),
          const ListTile(
            title: Text('Item 2'),
          ),
        ],
      ),
    );
  }
}
