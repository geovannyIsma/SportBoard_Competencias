import 'package:flutter/material.dart';
import '../services/group_service.dart';
import '../models/group.dart';

class GroupProvider with ChangeNotifier {
  List<Group> _groups = [];

  List<Group> get groups => _groups;

  Future<void> fetchGroups() async {
    _groups = await GroupService.getGroups();
    notifyListeners();
  }
}
